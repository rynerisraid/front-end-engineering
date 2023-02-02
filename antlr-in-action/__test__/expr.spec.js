const antlr4 = require('antlr4');
const ExprLexer = require('../libs/expr/ExprLexer').ExprLexer;
const ExprParser = require('../libs/expr/ExprParser').ExprParser;
const ExprGenerator = require('../codegen/ExprGenerator');

const path = require('path')
const fs = require('fs')

describe('Hello Expr',()=>{

    it('print __dirname()',()=>{
        const abspath = path.join(__dirname,'/t.expr');
        expect(abspath).toEqual('C:\\Users\\xmmt\\Desktop\\workspace\\front-end-engineering\\antlr-in-action\\__test__\\t.expr');

    })

    it('should print code from expr file',()=>{
        const abspath = path.join(__dirname,'/t.expr');
        const body = fs.readFileSync(abspath,'utf-8');
        //console.log(body.replace(/^[\r\n]/g,''));
        //expect(body.replace(/^[\n\r]/g,'')).toBe('193\r\na = 5\r\nb = 6\r\na+b*2\r\n(1+2)*3'.replace(/^[\n\r]/g,''));
    });

    it('should prog', () => { 
        const abspath = path.join(__dirname,'/t.expr');       
        const input = fs.readFileSync(abspath,'utf-8');
        const chars = new antlr4.InputStream(input);
        const lexer = new ExprLexer(chars);
        lexer.strictMode = false; // do not use js strictMode
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ExprParser(tokens);
        const tree = parser.prog();
        //console.log(tree.toStringTree(parser.ruleNames));
        /**
         * (prog (stat (expr 193) \r\n) (stat a = (expr 5) \r\n) (stat b = (expr 6) \r\n) (stat (expr (expr a) + (expr (expr b) * (expr 2))) \r\n) (stat (expr (expr ( (expr (expr 1) + (expr 2)) )) * (expr 3)) \r\n))
         */
        //expect(tree.toStringTree(parser.ruleNames).replace(/[\r\n]/,'')).toBe('(prog (stat (expr 193) \r\n) (stat a = (expr 5) \r\n) (stat b = (expr 6) \r\n) (stat (expr (expr a) + (expr (expr b) * (expr 2))) \r\n) (stat (expr (expr ( (expr (expr 1) + (expr 2)) )) * (expr 3)) \r\n))');
        
    });

    it('should visitor', () => { 
        const abspath = path.join(__dirname,'/t.expr');       
        const input = fs.readFileSync(abspath,'utf-8');
        const chars = new antlr4.InputStream(input);
        const lexer = new ExprLexer(chars);
        lexer.strictMode = false; // do not use js strictMode
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new ExprParser(tokens);
        const tree = parser.prog();

        const generator = new ExprGenerator();
        const output = generator.start(tree);
        console.log(output)
    
    });


})