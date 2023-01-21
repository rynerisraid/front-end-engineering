const ErrorListener = require('./codegen/ErrorListener');
const pgsql = require('./parser/pgsql')
const PglineageGenerator = require('./codegen/PglineageGenerator')

const input = `select a.col1,a.col2,a.col3 from intf.tk_prod_day a`;
//const input = `select 'hello world'`;


const lexer = pgsql.createLexer(input)
const parser = pgsql.createParserFromLexer(lexer)
/*
const chars = new antlr4.InputStream(input);
const lexer = new PgSQLLexer.PostgreSQLLexer(chars);
*/
lexer.strictMode = false; // do not use js strictMode


/*
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PgSQLParser.PostgreSQLParser(tokens);
*/
const listener = new ErrorListener();


// Do this after creating the parser and before running it
parser.removeErrorListeners(); // Remove default ConsoleErrorListener
parser.addErrorListener(listener); // Add custom error listener

console.log('PostgreSQL input:');
console.log(input);
console.log('AST output:');

try {
  const tree = parser.root()
  //console.log(tree)
  const output = new PglineageGenerator().start(tree);
  console.log(output)
  //console.log(tree.toStringTree(parser.ruleNames));
} catch (error) {
  console.log(error);
}