const antlr4 = require('antlr4');
const HelloLexer = require('../libs/hello/HelloLexer').HelloLexer;
const HelloParser = require('../libs/hello/HelloParser').HelloParser;
const HelloGenerator = require('../codegen/HelloGenerator');

describe('Hello Antlr4',()=>{

    it('should hello', () => {
        const input = 'hello world';

        const chars = new antlr4.InputStream(input);
        const lexer = new HelloLexer(chars);

        lexer.strictMode = false; // do not use js strictMode

        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new HelloParser(tokens);

        const tree = parser.s();
        //const generator = new HelloGenerator()
        //const output = generator.start(tree);
        //console.log(tree.toStringTree(parser.ruleNames));
        expect(tree.toStringTree(parser.ruleNames)).toEqual('(s hello world)')
    });

    it('should get node',()=>{
        
    })
})