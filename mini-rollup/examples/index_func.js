const fs = require('fs')
const acorn = require('acorn')
const MagicString = require('magic-string')

const code = fs.readFileSync(__dirname+'/'+'source_func.js').toString()

let ast = acorn.parse(code, {
    locations:true,
    ranges: true,
    sourceType:"module",
    ecmaVersion: 7 
})

const walk = require('../lib/ast/walk')
let indent = 0

ast.body.forEach((statement)=>{
    walk(statement, {
        enter(node){
            if(node.type=="FunctionDeclaration"){
                console.log('%sfunction: %s', " ".repeat(indent * 4), node.id.name[0])
                indent++
            }

            if(node.type=="VariableDeclarator"){
                console.log('%svariable: %s', " ".repeat(indent * 4), node.id.name[0])
            }
        },
        leave(node){
            if(node.type=="FunctionDeclaration"){
                indent--
            }
        }
    })
})