// Generated from grammars/Expr.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

function ExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprVisitor.prototype.constructor = ExprVisitor;

// Visit a parse tree produced by ExprParser#prog.
ExprVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#printExpr.
ExprVisitor.prototype.visitPrintExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#assign.
ExprVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#blank.
ExprVisitor.prototype.visitBlank = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#parens.
ExprVisitor.prototype.visitParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#MulDiv.
ExprVisitor.prototype.visitMulDiv = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#AddSub.
ExprVisitor.prototype.visitAddSub = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#id.
ExprVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#int.
ExprVisitor.prototype.visitInt = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprVisitor = ExprVisitor;