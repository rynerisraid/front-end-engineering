import compose from "./compose";
//import createStore from "./createStore";

export default function applyMiddleware(...middlewares) {

    return createStore=>reducer=>{
    
        const store = createStore(reducer)
        let dispatch = store.dispatch;

        //加强 dispath: 通过中间件 logger, thunk
        const midApi={
            getState: store.getState,
            dispatch:(action,...args)=>dispatch(action,...args),
        }

        const middlewareChain = middlewares.map(middleware=>middleware(midApi));

        //加强版的dispath,把所有的中间件函数都执行了，同时还执行store.dispatch
        dispatch = compose(...middlewareChain)(store.dispatch)

        return {
            ...store,
            //加强版的dispatch
            dispatch
        }

    }
};
