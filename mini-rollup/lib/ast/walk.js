/**
 * 节点遍历器
 */

function walk(ast, {enter, leave}){
    // enter(ast)
    // leave(ast)
    visit(ast,null,enter,leave)
}

//节点遍历

function visit(node, parent, enter, leave){
    if(!node) return ;
    
    if(enter){
        enter.call(null, node, parent)
    }

    //对象遍历
    const children = Object.keys(node).filter(key=> typeof node[key] === 'object' );
    
    children.forEach(childKey=>{
        let value = node[childKey];
        visit(value, node, enter, leave)
    })

    if(leave){
        leave(node, parent)
    }
}


module.exports = walk