function f1(arg){
    console.log("f1",arg)
    return arg;
}

function f2(arg){
    console.log("f2",arg)
    return arg;
}

function f3(arg){
    console.log("f3",arg)
    return arg;
}

//上一个函数的返回值是下一个函数的返回值
//洋葱模型?
const res = f1(f2(f3('mooo')))

//compose
const res2 = compose(f1,f2,f3)("omg")


function compose(...funcs){
    if(funcs.length===0){
        return (arg)=>arg
    }
    if(funcs.length===1){
        return funcs[0]
    }

    return funcs.reduce(
        (a,b)=>
        (...args)=>
            a(b(args)))
    
}


console.log('res2',res2)