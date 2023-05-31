//import { applyMiddleware, createStore,combineReducers} from 'redux'

import { createStore,applyMiddleware,thunk,logger,promise,combineReducers } from "../redux-nut/"
//import thunk from 'redux-thunk'
//import logger from 'redux-logger'

function countReducer(state=0, action){
    switch(action.type){
        case "ADD":
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        count:countReducer,
        
    }),
    applyMiddleware(thunk,logger,promise));

export {store,countReducer};
