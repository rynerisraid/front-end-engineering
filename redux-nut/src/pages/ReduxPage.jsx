import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {

    componentDidMount() {
        //告诉redux一旦state变化
        //一旦执行dispatch 函数，就执行的事件
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        //订阅和取消订阅要成对出现
        this.unsubscribe();
    }

    add = () => {
        store.dispatch({ type: "ADD" })
        console.log('store', store.getState())
    }
    minus = () => {
        // setTimeout(()=>{
        //     store.dispatch({type:"MINUS"})
        //     console.log('store',store.getState())
        // },2000)
        store.dispatch((dispatch) => {
            setTimeout(() => {
                dispatch({ type: "MINUS" })
            }, 1000)
        })
        //redux 的 dispatch不处理函数，需要引入中间件
    }

    promiseMinus = () => {
        store.dispatch(
            Promise.resolve({
                type: "MINUS",
                payload: 100
            }))
    }

    render() {
        return <div>
            <h3>ReduxPage</h3>
            <p>{store.getState().count}</p>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>minus</button>
            <button onClick={this.promiseMinus}>promiseMinus</button>
        </div>
    }
}