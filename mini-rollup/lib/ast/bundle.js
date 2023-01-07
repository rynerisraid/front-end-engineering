const fs = require('fs')
const path = require('path')
const Module = require('./module')
const { default: MagicString } = require("magic-string");


class Bundle{

    constructor({ entry }){

        this.entryPath = entry.replace(/\.js$/,'') + '.js'

        this.modules = []

    }

    /**
     * 读取模块
     * @param {*} importee   被调用者
     * @param {*} importer  调用者
     * @description main.js  import foo.js  
     *  importee foo        
     *  importer main.js
     */
    fetchModule(importee, importer){
        // 路径计算
        let route
        if(!importer){
            //主模块
            route = importee
        }else{
            //计算相对于 importer 的路径，做一个路径的准换
            if(path.isAbsolute(importee)){
                //绝对路径
                route = importee
            }else if(importee[0] == '.'){
                route = path.resolve(
                    path.dirname(importer),
                    importee.replace(/\.js$/,'') + '.js'  //不管后面是否以js结尾，都让他以js结尾
                );
            }
        }

        if(route){
            // 读取代码
            const code = fs.readFileSync(route, 'utf-8').toString()
            const module = new Module({
                code: code,
                path: route,
                bundle: this
            })

            return module
        }else{
            
        }

    }

    build(outputFileName){
        // 从入口的绝对路径找到模块定义
        let entryModule = this.fetchModule(this.entryPath);
        // 展开所有import项
        // import {name,age}
        this.statements = entryModule.expandAllStatement();
        // 生成代码
        const { code } = this.generate();
        // console.log('code', code)
        fs.writeFileSync(outputFileName, code, "utf-8");

    }

    generate(){
        const magicString = new MagicString.Bundle()

        this.statements.forEach((statement)=>{
            const source = statement._source.clone()
            if(statement.type === 'ExportNamedDeclaration'){
                source.remove(statement.start, statement.declaration.start);
            }
            magicString.addSource({
                content:source,
                separator:'\n'
            })
        })

        return { code: magicString.toString() };
    }

}

module.exports = Bundle