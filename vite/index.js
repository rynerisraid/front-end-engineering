const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const compilerSfc = require('@vue/compiler-sfc')
const compilerDom = require('@vue/compiler-dom')
const app = new Koa()

app.use(async ctx=>{
    const { url, query } = ctx.request;
    console.log('url: ' + url)
    //如果输入的是 / => index.html
    if(url === '/'){
        ctx.type = 'text/html'
        let content = fs.readFileSync('./index.html', 'utf-8')
        //入口文件动态改写
        content = content.replace('<script',
        `<script>
        window.process = { env: { NODE_ENV:'dev'}}
        </script>
        <script`)
        ctx.body = content
    }else if(url.endsWith('.js')){
        // src/main.js => ./src/main.js
        const p = path.resolve(__dirname, url.slice(1))
        const content = fs.readFileSync(p, 'utf-8')
        ctx.type = 'application/javascript'
        ctx.body = rewriteImport(content)
    }else if(url.startsWith('/@modules')){
            
        // *.js  => src/*.js

        // 第三方库的支持
        // vue => node_modules/***
        // /@modules/vue => 代码的位置 /node_modules/vue/
        // node_modules/vue/ 的 es模块入口
        const prefix = path.resolve(
            __dirname, 
            'node_modules', 
            url.replace('/@modules/',''))
        // 读取 package.json 的 module 属性
        const module = require(prefix + `/package.json`).module
    
        // 
        const p = path.resolve(prefix, module)
        const ret = fs.readFileSync(p,'utf-8')
        ctx.type = 'application/javascript'
        ctx.body = rewriteImport(ret)


    }
    // 支持SFC组件 单文件组件
    // *.vue =>     
    else if(url.indexOf('.vue') >-1){
        // 第一步 vue文件 =>编译 template script (comlier-sfc)  npm i @vue/compiler-sfc
        const p = path.resolve(__dirname, url.split('?')[0].slice(1))
        const { descriptor } = compilerSfc.parse(fs.readFileSync(p, "utf-8"));
        //console.log('descriptor',descriptor)
        // descriptor js + template render部分

        // 第二步 template 模板 => render函数 (complier-dom)
        // comlierDom
        if (!query.type) {
            ctx.type = "application/javascript";
            // 借用vue自导的compile框架 解析单文件组件，其实相当于vue-loader做的事情
            ctx.body = `
            ${rewriteImport(
            descriptor.script.content.replace("export default ", "const __script =")
            )}
            import { render as __render } from "${url}?type=template"
            __script.render = __render
            export default __script
            `;
        }else{ //if(query.type=="template")
            // 模板内容
            const template = descriptor.template;
            // 要在server端吧comWpiler做了
            const render = compilerDom.compile(template.content, { mode: "module"});
            ctx.type = "application/javascript";
            ctx.body = rewriteImport(render.code);

        }
    }            
    //css 文件
    else if(url.endsWith('.css')){
        // css 转化为 js代码
        // 利用js 添加一个style标签
        const p = path.resolve(__dirname, url.slice(1));
        const file = fs.readFileSync(p, "utf-8");
        console.log(file)
        const content = `
        const css = "${file.replace(/\n/g, "")}"
        let link = document.createElement('style')
        link.setAttribute('type', 'text/css')
        document.head.appendChild(link)
        link.innerHTML = css
        export default css
            `;
        ctx.type = "application/javascript";
        ctx.body = content;


    }



    // 需要改写 欺骗一下浏览器 'vue' => './' '../'
    //  '/@modules/vue => 别名
    // from 'xxx'

    function rewriteImport(content){
        // 正则表达式的替换
        return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0,s1){
            //16:15 手写vite第三方库支持
            if(s1[0] !== '.' && s1[1] !=='/'){
                // 是不是 不是一个绝对路径或相对路径 / 或 ../ ./
                return ` from '/@modules/${s1}'`
            }else{
                return s0
            }
        })
    }



})

app.listen(3000,()=>{
    console.log('Vite start at 3000')
})