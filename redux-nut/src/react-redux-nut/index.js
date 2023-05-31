//跨组件层级传递数据
import React, { useCallback, useContext, useEffect,useLayoutEffect, useReducer, useState } from "react";
import { bindActionCreators } from "redux";


//1.创建context对象
const Context = React.createContext();

//2.Provider 组件传 value (store)

export function Provider({store, children}) {
    return <Context.Provider value={store}>{children}</Context.Provider>;
}

//3.后代消费provider传递下来的value
/**
 * contextType  只能用在类组件，并且只能订阅单一的context来源
 * useContext  只能用在类租价你或者自定义Hook中   
 * Consumer    没有组件限制，注意使用方式
 */

export const connect = (mapStateToProps, mapDispatchToProps)=>(WrappedComponent)=>(props)=>{
    const store = useContext(Context)
    const {getState, dispatch, subscribe} = store;
    const stateProps = mapStateToProps(getState())
    //const dispatchProps = {dispatch}

    let dispatchProps = {dispatch};
    if(typeof mapDispatchToProps ==='function'){
        dispatchProps = mapDispatchToProps(dispatch)
    }else if(typeof mapDispatchToProps ==="object"){
        dispatchProps = bindActionCreators(mapDispatchToProps,dispatch);
    }


    //const [,forceUpdate] = useReducer(x=>x+1,0);
    const forceUpdate = useForceUpdate();
    /*订阅： useEffect 和 useLayoutEffect 
            useEffect       异步，有延迟
            useLayoutEffect 立马执行
    */
    useLayoutEffect(()=>{
        const unsubscribe =subscribe(()=>{
            forceUpdate();
        })
        
        return ()=>{
            unsubscribe();
        }
    },[subscribe])
    

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

function useForceUpdate(){
    const [state,setState] = useState(0);

    const update = useCallback(
        ()=>{
            setState(prev=>prev+1)
        }
    )
    return update;
}

export function useSelector(selector){
    const store = useContext(Context);

    const { getState,subscribe } = store;
    
    const selectedState = selector(getState());

    //const [,forceUpdate] = useReducer(x=>x+1,0);
    const forceUpdate = useForceUpdate();
    /*订阅： useEffect 和 useLayoutEffect 
            useEffect       异步，有延迟
            useLayoutEffect 立马执行
    */
    useLayoutEffect(()=>{
        const unsubscribe =subscribe(()=>{
            forceUpdate();
        })
        
        return ()=>{
            unsubscribe();
        }
    },[subscribe])

    return selectedState;
}

export function useDispatch(){
    const store = useContext(Context);

    const { dispatch } = store;
    
    return dispatch;
    
}