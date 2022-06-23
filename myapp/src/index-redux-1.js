//redux 
import React from "react";
import ReactDOM from "react-dom";
import { useSelector, Provider, useDispatch } from "react-redux";
import { createStore, combineReducers } from "redux";


const incrementReducer = (state = {
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

const decrementReducer = (state = {
    count: 10
}, action) => {
    switch (action.type) {
        case 'counter/decrement':
            //immutable logic
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})
//create store 
const store = createStore(rootReducer)
//react

const Increment = props => {
    // How to access redux state from the react
    //multi reducer :
    const counter = useSelector(globalState => {
        //globalState.reducerName.yourState
        console.log(globalState)
        return globalState.increment.count;
    })
    const dispatch = useDispatch()

    //event listener
    const onIncrement = () => {
        dispatch({
            type: 'counter/increment'
        })
    }

    return <div>
        <h1>Counter App Using React - Redux-Increment</h1>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}

const Decrement = props => {

    // How to access redux state from the react
    const counter = useSelector(globalState => {
        //globalState.reducerName.yourState
        console.log(globalState)
        return globalState.decrement.count;
    })
    const dispatch = useDispatch()

    //event listener
    const onDecrement = () => {
        dispatch({
            type: 'counter/decrement'
        })
    }

    return <div>
        <h1>Counter App Using React - Redux-Decrement</h1>
        <h1>Counter {counter}</h1>
        <button onClick={onDecrement}>-</button>
    </div>
}

const App = () => <div>
    {/* Provider injects  */}
    <Provider store={store}>
            <Increment />
            <hr />
            <Decrement/>
    </Provider>
</div>

ReactDOM.render(<App />, document.getElementById('root'))