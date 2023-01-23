const path = require('path')
const PgSqlVisitor =  require('../lib/PostgreSQLParserVisitor').PostgreSQLParserVisitor

const {
    SemanticArgumentCountMismatchError
} = require(path.resolve('error', 'helper'));


class Visitor extends PgSqlVisitor{

    /**
     * 进入抽象语法树
     * @param {*} ctx 
     * @returns 
     */
    start(ctx){
        
        return this.visitStmt(ctx)
    }

    /**
     *  Visits children of current node
     * 
     * @param {*} ctx 
     * @returns {string} 
    */ 
    
    visitChildren(ctx){
        let code = ''
        //let token = []
        for (let i = 0; i < ctx.getChildCount(); i++) {
            code += this.visit(ctx.getChild(i));
        }
      
        return code.trim();
    }
    
    


    /**
     * Visits a leaf node and returns a string
     * @param {*} ctx 
     * @returns 
     */
    visitTerminal(ctx){
        
        return ctx.getText();
        
    }

    

    visitAnysconst(ctx){
        
        return this.visitChildren(ctx)
    }

}

module.exports = Visitor;