const path = require('path')
const ExprVisitor = require('../libs/expr/ExprVisitor').ExprVisitor

const {
    SemanticArgumentCountMismatchError
} = require(path.resolve('error', 'helper'));

class Visitor extends ExprVisitor{
 
    constructor(props) {
        super(props)
        this.memory = {};
    }

    start(ctx){
        return this.visitProg(ctx)
    }

    visitAssign(ctx){
        let id = ctx.ID().getText();
        let value = this.visit(ctx.expr())
        this.memory[id] = value;
        return value
    }

    visitPrintExpr(ctx){
        let value = this.visit(ctx.expr())
        console.log(value)
        return value
    }

    visitInt(ctx){
        return parseInt(ctx.INT().getText())
    }

    visitId(ctx){
        let id = ctx.ID().getText();
        if(this.memory.hasOwnProperty(id)){
            return this.memory[id];
        }
        return 0;
    }

    visitMulDiv(ctx){
        let left  = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));
        if(ctx.op.text==='*'){
            return left * right;
        }
        return left / right;
    }
    
    visitAddSub(ctx){
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if(ctx.op.text==='+'){
            return left + right;
        }
        return left - right;
    }

    visitParens(ctx){
        this.visit(ctx.expr())
    }

}

module.exports = Visitor;
