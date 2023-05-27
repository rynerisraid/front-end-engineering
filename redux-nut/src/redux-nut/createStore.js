
export default function createStore(reducer,enhancer) {

    if(enhancer){
        return enhancer(createStore)(reducer)
    }

    let currentState;
    let currentlisteners = []

    function getState(){
        return currentState;
    }

    function dispatch(action){
        currentState = reducer(currentState, action)
        currentlisteners.forEach(
            listener=>listener()
        )
    }

    function subscribe(listener){
        currentlisteners.push(listener);

        return ()=>{
            const index = currentlisteners.indexOf(listener);
            currentlisteners.splice(index,1);
        };
    }
    
    dispatch({type:"init redux"})

    return {
        getState,
        dispatch,
        subscribe,
        createStore
    }
};
