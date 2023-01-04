const analyse = require("../analyze");

const MagicString = require('magic-string')
const acorn = require('acorn')
function getCode(code) {
    const ast = acorn.parse(code, {
        locations: true, // 索引位置
        ranges: true,
        sourceType: "module",
        ecmaVersion: 7,
    })
    return {
        ast,
        magicString: new MagicString(code)
    }
}

describe('AST Analyse方法', () => {
    it("空语法树", () => {
        const ast = {
        body: [],
        };
        analyse(ast);
    });
        
});




describe('单个变量', () => {

    
    it('_scope _defines', () => {
        const { ast, magicString } = getCode(`const a =1`)
        analyse(ast, magicString)

        console.log(ast)

        expect(ast._scope.contains('a')).toBe(true)
        expect(ast._scope.findDefiningScope('a')).toEqual(ast._scope)
        expect(ast.body[0]._defines).toEqual({ a: true })
    });
    

    // it("单个变量", () => {
    //     const { ast, magicString } = getCode(`const a = () => 'a'`)
    //     analyse(ast, magicString)
    //     expect(ast._scope.cantains('a')).toBe(true)
    //     expect(ast._scope.findDefiningScope('a')).toEqual(ast._scope)
    //     expect(ast.body[0]._defines).toEqual({ a: true }) // 变量定义
    // })
    
});
