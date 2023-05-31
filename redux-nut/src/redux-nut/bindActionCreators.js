function bindActionCreator(creator, dispath){
    return (...args)=> dispath(creator(...args))
}

export default function bindActionCreators(creators,dispath) {
    //接收字典和函数
    let obj = {}

    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key], dispath)
    }
    return obj;
    
};
