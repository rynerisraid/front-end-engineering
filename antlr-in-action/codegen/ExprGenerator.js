const path = require('path')
const ExprVisitor = require('../libs/expr/ExprVisitor').ExprVisitor

const {
    SemanticArgumentCountMismatchError
} = require(path.resolve('error', 'helper'));

class Visitor extends ExprVisitor{
 
    memory = {};

    start(ctx){
        return this.visitProg(ctx)
    }

    visitAssign(ctx){
        
        return value
    }
    
}

module.exports = Visitor;
