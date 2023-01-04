const Scope = require('./scope')
const walk = require('./walk')

/**
 * 
 * 当前模块使用哪些变量
 * 哪些变量是当前模块声明
 * @param {*} ast 
 * @param {*} magicString 
 * @param {*} module 
 */

function analyse(ast, magicString){

    //创建全局作用域
    let scope = new Scope()

    ast._scope = scope;

    ast.body.forEach((statement)=>{

        /**
         * 给作用域添加变量
         * @param {*} declaration 声明节点
         */
        function addToScope(declaration){
            var name = declaration.id.name; // 获取声明的变量
            scope.add(name);
            if (!scope.parent) {
            // 如果此变量不是全局作用域
            // 如果当前是全局作用域的话
            // 在全局作用域下声明全局变量
                statement._defines[name] = true;
            }
        }

        Object.defineProperties(statement, {
            // 变量定义
            _defines: { value: {} }, //当前的节点声明的变量 home
            // _modifies: { value: {} },//修改的语句
            // 依赖外部变量
            _dependsOn: { value: {} }, //当前模块没有定义的变量 当前节点依赖了哪些外部变
            _included: { value: false, writable: true }, //此语句是已经包含到输出语句
            // 变量语句
            _source: { value: magicString.snip(statement.start, statement.end) },
        });            

        walk(statement, {
            enter(node){
                let newScope;
                // 防止空节点和空数组
                if (node === null || node.length === 0) return;

                switch(node.type){
                    //函数声明
                    case 'FunctionDeclaration':
                        // 加入到作用域之中
                        addToScope(node);
                        const params = node.params.map((v) => v.name);
                        // 新作用域
                        newScope = new Scope({
                                    parent: scope,
                                    params
                                });
                        break;
                    case 'VariableDeclaration':
                        node.declarations.forEach(addToScope);
                        break;
                    default:
                        break;
                }

                if (newScope) {
                    // console.log("newScope", newScope);
                    // 当前节点声明的新作用域
                    // 如果此节点生成一个新作用域
                    Object.defineProperties(node, { 
                        _scope: { value: newScope } 
                    });
                    scope = newScope;
                }
            },

            leave(node){
                if (node._scope) {
                    // 如果此节点离开退回父作用域
                    scope = scope.parent;
                }
            }
        })
    })

    

    ast.body.forEach(statement=>{
        walk(statement, {
            enter(node){
                if (node._scope) {
                    scope = node._scope;
                }

                if(node.type ==='Identifier'){
                    statement._dependsOn[node.name] = true
                }
            }
        })
    })
}

module.exports = analyse