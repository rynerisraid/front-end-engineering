const { InputStream, CommonTokenStream, Lexer } = require('antlr4')

const PgSQLLexer = require('../lib/PostgreSQLLexer');
const PgSQLParser = require('../lib/PostgreSQLParser');
const ErrorListener = require('../codegen/ErrorListener');

const pgsql = function(){

}

pgsql.createLexer = function createLexer(input){
    const chars = new InputStream(input);
    const lexer = new PgSQLLexer.PostgreSQLLexer(chars);
    return lexer
}

pgsql.createParserFromLexer = function createParserFromLexer(lexer){
    const tokens = new CommonTokenStream(lexer);
    const parser = new PgSQLParser.PostgreSQLParser(tokens);
    return parser
}

module.exports = pgsql
/**
import { InputStream, CommonTokenStream, Lexer } from 'antlr4';
import { PostgreSQLLexer } from '../lib/pgsql/PostgreSQLLexer';
import { PostgreSQLParser } from '../lib/pgsql/PostgreSQLParser';

import BasicParser from './common/basicParser';

export default class PostgresSQL extends BasicParser {
    public createLexer(input: string): Lexer {
        const chars = new InputStream(input.toUpperCase());
        const lexer = <unknown> new PostgreSQLLexer(chars) as Lexer;
        return lexer;
    }
    public createParserFromLexer(lexer: Lexer): any {
        const tokenStream = new CommonTokenStream(lexer);
        return new PostgreSQLParser(tokenStream);
    }
}
 */
