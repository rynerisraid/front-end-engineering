const ErrorListener = require('../codegen/ErrorListener');
const pgsql = require('../parser/pgsql')
const PglineageGenerator = require('../codegen/PglineageGenerator')

describe('测试parser',()=>{

    it('解析语法树', () => {
        const input = `select 'hello world' `;
        const lexer = pgsql.createLexer(input)
        const parser = pgsql.createParserFromLexer(lexer)

        lexer.strictMode = false; // do not use js strictMode

        const listener = new ErrorListener();

        parser.removeErrorListeners(); // Remove default ConsoleErrorListener
        parser.addErrorListener(listener); // Add custom error listener

        const tree = parser.stmt()
        const output = new PglineageGenerator().start(tree);
        console.log(output)
    });

    it('测试改成 token',()=>{
        const input = `select a.col1,a.col2,a.col3 from intf.tk_prod_day a`;
        const lexer = pgsql.createLexer(input)
        const parser = pgsql.createParserFromLexer(lexer)

        lexer.strictMode = false; // do not use js strictMode

        const listener = new ErrorListener();

        parser.removeErrorListeners(); // Remove default ConsoleErrorListener
        parser.addErrorListener(listener); // Add custom error listener

        const tree = parser.stmt()
        const output = new PglineageGenerator().start(tree);
        console.log(output)
    })

})