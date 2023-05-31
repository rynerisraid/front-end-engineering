import { Component } from "react";
//import { connect } from "react-redux";
import { connect } from "../react-redux-nut";
//import { bindActionCreators } from "redux";
import { bindActionCreators } from "../redux-nut"
// HOC higher order Component 高阶组件是个函数，接受组件作为参数，返回新的组件
export default connect(
    //mapStateToProps, 

    // (state,ownProps)=>{
    //     console.log("ownProps",ownProps)
    //     return state
    // }
    ({ count }) => ({ count }),
    {
        add: ()=>({type:"ADD"}),  //react-redux背后调用了dispath
        minus: ()=>({type:"MINUS"}),
    }
    // (dispatch) => {
    //     let creators = {
    //         add: () => ({ type: "ADD" }),  //react-redux背后调用了dispath
    //         minus: () => ({ type: "MINUS" }),
    //     };

    //     creators = bindActionCreators(creators,dispatch) // 绑定
    //     return { dispatch,...creators };
    // }
    //mapDispatchToProps
)(
    class ReactReduxPage extends Component {

        render() {
            console.log("props", this.props)
            const { count, dispatch, add, minus } = this.props;
            return (
                <div>
                    <h3>ReactReduxPage</h3>
                    <button onClick={() => { dispatch({ type: "ADD" }) }}>dispath: {count}</button>
                    <button onClick={add}>add: {count}</button>
                </div>
            )
        }
    }
);
