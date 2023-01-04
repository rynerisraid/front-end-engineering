// 1.parse 分析代码的结构
const fs = require('fs')
const acorn = require('acorn')
const MagicString = require('magic-string')


const code = fs.readFileSync(__dirname+'/'+'source.js').toString()

const ast = acorn.parse(code, {
    sourceType:'moudle',
    ecmaVersion: 7
})

console.log('ast',ast)


// 2.遍历声明了哪些变量
const declarations = {
    
}

// 将声明放在调用前
// a() => const a = () => 1; a()
ast.body
    .filter(v=> v.type === 'VariableDeclaration')
    .map(
        v=>{
            console.log('声明',v.declarations[0].id.name)
            declarations[v.declarations[0].id.name] = v    
        }
    )



//
const statements = []

ast.body
    .filter(v=> v.type !== 'VariableDeclaration')
    .map(
        node=>{
            statements.push(declarations[node.expression.callee.name])
            statements.push(node)
        })

// 导出
const m = new MagicString(code)
console.log('------------------------------------')
statements.map(node=>{
    
    console.log(m.snip(node.start,node.end).toString())
})
console.log('------------------------------------')