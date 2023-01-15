const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const app = new Koa()
app.use(async ctx=>{
    const { url, query } = ctx.request;
    console.log('url: ' + url)
    //如果输入的是 / => index.html
    if(url === '/'){
        ctx.type = 'text/html'
        const content = fs.readFileSync('./index.html', 'utf-8')
        ctx.body = content
    }else if(url.endsWith('.js')){
        // src/main.js => ./src/main.js
        const p = path.resolve(__dirname, url.slice(1))
        const content = fs.readFileSync(p, 'utf-8')
        ctx.type = 'application/javascript'
        ctx.body = content
    }

    // *.js  => src/*.js

    // 第三方库的支持
    // vue => node_modules/***

    // 改写函数

    // 需要改写 欺骗一下浏览器 'vue' => './' '../'
    //  '/@modules/vue => 别名
    // from 'xxx'

    function rewriteImport(content){
        // 正则表达式的替换
        return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0,s1){
            //16:15 手写vite第三方库支持
        })
    }



})

app.listen(3000,()=>{
    console.log('Vite start at 3000')
})