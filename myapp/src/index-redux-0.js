//redux 
import React from "react";
import ReactDOM from "react-dom";
import { useSelector, Provider, useDispatch } from "react-redux";
import { createStore } from "redux";


//biz logic : reducer : pure function 
const counterReducer = (state = {
    count: 10
}, action) => {
    switch (action.type) {
        case 'counter/increment':
            //immutable logic
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}
//create store 
const store = createStore(counterReducer)


//react

const Counter = props => {

    // How to access redux state from the react
    const counter = useSelector(state => {
        return state.count
    })
    const dispatch = useDispatch()

    //event listener
    const onIncrement = () => {
        //we need to call reducer , because the logic is written there only 
       //action 
        // const incrementAction = {
        //     type: 'counter/increment'
        // }
        // dispatch(incrementAction)
        dispatch({
            type: 'counter/increment'
        })
    }

    return <div>
        <h1>Counter App Using React - Redux</h1>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}

const App = () => <div>
    {/* Provider injects  */}
    <Provider store={store}>
        <Counter />
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'))