//state :
import React from 'react'
import ReactDOM from 'react-dom'


//having : state + biz logic + ui
class Counter extends React.Component {
    state = {
        count: 0  //inital state
    }
    //event listener
    onIncrement = () => {
        this.setState(prevState => ({ ...prevState, count: prevState.count + 1 }))
    }
    render() {
        return <div>
            {/* dynamic props , function as prop */}
            <CounterUI count={this.state.count} onIncrement={this.onIncrement} />
        </div>
    }
}

//functional component 
const CounterUI = props => {
    return <div>
        <h1>CounterApp - Using State</h1>
        <h2>Counter : {props.count}</h2>
        <button onClick={props.onIncrement} >+</button>
    </div>
}





const App = () => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))
