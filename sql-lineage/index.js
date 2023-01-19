const antlr4 = require('antlr4');
const PgSQLLexer = require('./lib/PostgreSQLLexer');
const PgSQLParser = require('./lib/PostgreSQLParser');
const ErrorListener = require('./codegen/ErrorListener');

const input = `select 'hello world' `;

const chars = new antlr4.InputStream(input);
const lexer = new PgSQLLexer.PostgreSQLLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PgSQLParser.PostgreSQLParser(tokens);
const listener = new ErrorListener();

// Do this after creating the parser and before running it
parser.removeErrorListeners(); // Remove default ConsoleErrorListener
parser.addErrorListener(listener); // Add custom error listener

console.log('PostgreSQL input:');
console.log(input);
console.log('AST output:');

try {
  const tree = parser.root()
  //const output = new PythonGenerator().start(tree);

  console.log(tree.toStringTree(parser.ruleNames));
} catch (error) {
  console.log(error);
}