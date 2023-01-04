const a = ()=> 1
const b = ()=> 2  //tree-shaking会消除无用代码
const c = ()=> 3

c()
a()