const path = require('path')
const HelloVisitor = require('../libs/hello/HelloVisitor').HelloVisitor

const {
    SemanticArgumentCountMismatchError
} = require(path.resolve('error', 'helper'));

class Visitor extends HelloVisitor{

    start(ctx){
        return this.visitS(ctx)
    }

    visitS(ctx){
        
        return this.visitChildren(ctx)
    }

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

    
}

module.exports = Visitor;
