
/*
npm init -y
yarn add @babel/parser
yarn add @babel/traverse
yarn add @babel/core
yarn add @babel/preset-env
*/

const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

/**
 * 分析单独模块
 * @param {*} file 
 */
function getModuleInfo(file){
    
    //读取文件
    const body = fs.readFileSync(file,'utf-8')
    //console.log(body)

    // 转换AST语法树
    // 代码字符串  => 对象 => 对象遍历解析
    // 编译过程 parser transfor render
    const ast = parser.parse(body, {
        sourceType:'module'
    })
    console.log('ast:',ast)
    const deps = {}
    traverse(ast,{
        // visitor
        ImportDeclaration({node}){
            // 遇到 import节点的时候
            //console.log('import', node)
            const dirname = path.dirname(file) 
            //console.log('dirname',dirname)
            
            const abspath =  './'+path.join(dirname,node.source.value) // ./add.js
            //console.log('abspath',abspath)
            deps[node.source.value] = abspath
        }
    })

    //TODO ES6=>ES5
    const {code} = babel.transformFromAst(ast, null, {
        presets: ['@babel/preset-env']
    })

    const moduleInfo = { file, deps, code }
    return moduleInfo
}

/**
 * 解析模块
 * @param {*} file 
 */
function parseModule(file) {
    const entry = getModuleInfo(file)
    const temp = [entry]
    //输出的依赖图
    const depsGraph = {}

    getDeps(temp, entry)

    temp.forEach(info=>{
        depsGraph[info.file] = {
            deps: info.deps,
            code: info.code
        }
    })

    return depsGraph;
    
}

/**
 * 用于获取依赖
 */
function getDeps(temp, { deps }) {
    Object.keys(deps).forEach(key=>{
        const child = getModuleInfo(deps[key])
        temp.push(child)
        getDeps(temp,child)
    })
}

// const content = parseModule('./src/index.js')
// console.log('content',content)

function bundle(file) {
    const depsGraph = JSON.stringify(parseModule(file))
    return `(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
        var exports = {};
        (function (require,exports,code) {
            eval(code)
        })(absRequire,exports,graph[file].code)
            return exports
        }
        require('${file}')
    })(${depsGraph})`;
}

const content = bundle('./src/index.js')
console.log('content',content)

!fs.existsSync("./dist") && fs.mkdirSync("./dist");
fs.writeFileSync("./dist/bundle.js", content);