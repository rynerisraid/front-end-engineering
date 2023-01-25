// Generated from grammars/Expr.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var ExprVisitor = require('./ExprVisitor').ExprVisitor;

var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004 \n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b\u0004",
    "\u0003\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006\u0002\u0004\u0003",
    "\u0002\u0006\u0007\u0003\u0002\b\t\u00020\u0002\t\u0003\u0002\u0002",
    "\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002",
    "\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002\u0002\n\u000b",
    "\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003",
    "\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000e\u0005\u0006",
    "\u0004\u0002\u000e\u000f\u0007\f\u0002\u0002\u000f\u0017\u0003\u0002",
    "\u0002\u0002\u0010\u0011\u0007\n\u0002\u0002\u0011\u0012\u0007\u0003",
    "\u0002\u0002\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014\u0007\f",
    "\u0002\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0017\u0007\f",
    "\u0002\u0002\u0016\r\u0003\u0002\u0002\u0002\u0016\u0010\u0003\u0002",
    "\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0005\u0003\u0002",
    "\u0002\u0002\u0018\u0019\b\u0004\u0001\u0002\u0019 \u0007\u000b\u0002",
    "\u0002\u001a \u0007\n\u0002\u0002\u001b\u001c\u0007\u0004\u0002\u0002",
    "\u001c\u001d\u0005\u0006\u0004\u0002\u001d\u001e\u0007\u0005\u0002\u0002",
    "\u001e \u0003\u0002\u0002\u0002\u001f\u0018\u0003\u0002\u0002\u0002",
    "\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002",
    " )\u0003\u0002\u0002\u0002!\"\f\u0007\u0002\u0002\"#\t\u0002\u0002\u0002",
    "#(\u0005\u0006\u0004\b$%\f\u0006\u0002\u0002%&\t\u0003\u0002\u0002&",
    "(\u0005\u0006\u0004\u0007\'!\u0003\u0002\u0002\u0002\'$\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002\u0007\u000b\u0016\u001f\')"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, "MUL", "DIV", "ADD", "SUB", 
                      "ID", "INT", "NEWLINE", "WS" ];

var ruleNames =  [ "prog", "stat", "expr" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.MUL = 4;
ExprParser.DIV = 5;
ExprParser.ADD = 6;
ExprParser.SUB = 7;
ExprParser.ID = 8;
ExprParser.INT = 9;
ExprParser.NEWLINE = 10;
ExprParser.WS = 11;

ExprParser.RULE_prog = 0;
ExprParser.RULE_stat = 1;
ExprParser.RULE_expr = 2;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ProgContext = ProgContext;

ExprParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.stat();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__1) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.NEWLINE))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;


 
StatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BlankContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlankContext.prototype = Object.create(StatContext.prototype);
BlankContext.prototype.constructor = BlankContext;

ExprParser.BlankContext = BlankContext;

BlankContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
BlankContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterBlank(this);
	}
};

BlankContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitBlank(this);
	}
};

BlankContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitBlank(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintExprContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintExprContext.prototype = Object.create(StatContext.prototype);
PrintExprContext.prototype.constructor = PrintExprContext;

ExprParser.PrintExprContext = PrintExprContext;

PrintExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PrintExprContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
PrintExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterPrintExpr(this);
	}
};

PrintExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitPrintExpr(this);
	}
};

PrintExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitPrintExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignContext.prototype = Object.create(StatContext.prototype);
AssignContext.prototype.constructor = AssignContext;

ExprParser.AssignContext = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.NEWLINE = function() {
    return this.getToken(ExprParser.NEWLINE, 0);
};
AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.StatContext = StatContext;

ExprParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ExprParser.RULE_stat);
    try {
        this.state = 20;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PrintExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.expr(0);
            this.state = 12;
            this.match(ExprParser.NEWLINE);
            break;

        case 2:
            localctx = new AssignContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.match(ExprParser.ID);
            this.state = 15;
            this.match(ExprParser.T__0);
            this.state = 16;
            this.expr(0);
            this.state = 17;
            this.match(ExprParser.NEWLINE);
            break;

        case 3:
            localctx = new BlankContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 19;
            this.match(ExprParser.NEWLINE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParensContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(ExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

ExprParser.ParensContext = ParensContext;

ParensContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitParens(this);
	}
};

ParensContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitParens(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExprContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

ExprParser.MulDivContext = MulDivContext;

MulDivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MulDivContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterMulDiv(this);
	}
};

MulDivContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitMulDiv(this);
	}
};

MulDivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitMulDiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExprContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

ExprParser.AddSubContext = AddSubContext;

AddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterAddSub(this);
	}
};

AddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitAddSub(this);
	}
};

AddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdContext.prototype = Object.create(ExprContext.prototype);
IdContext.prototype.constructor = IdContext;

ExprParser.IdContext = IdContext;

IdContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};
IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(ExprContext.prototype);
IntContext.prototype.constructor = IntContext;

ExprParser.IntContext = IntContext;

IntContext.prototype.INT = function() {
    return this.getToken(ExprParser.INT, 0);
};
IntContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterInt(this);
	}
};

IntContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitInt(this);
	}
};

IntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.INT:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 23;
            this.match(ExprParser.INT);
            break;
        case ExprParser.ID:
            localctx = new IdContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.match(ExprParser.ID);
            break;
        case ExprParser.T__1:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 25;
            this.match(ExprParser.T__1);
            this.state = 26;
            this.expr(0);
            this.state = 27;
            this.match(ExprParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 37;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 32;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.MUL || _la===ExprParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 33;
                    this.expr(6);
                    break;

                case 2:
                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 35;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.ADD || _la===ExprParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 36;
                    this.expr(5);
                    break;

                } 
            }
            this.state = 41;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
