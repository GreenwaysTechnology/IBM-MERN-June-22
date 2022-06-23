//state :
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * String str="hello"
 * String newStr = str.toUpperCase()
 * str memory location and newStr memoryLocation
 */

class Counter extends React.Component {
    state = {
        count: 0
    }
    //event listener
    onIncrement = () => {
        this.setState(prevState => {
            console.log("old State =>", prevState)
            return { ...prevState, count: prevState.count + 1 }
        })
    }


    render() {
        console.log("current State =>", this.state)
        return <div>
            <h1>CounterApp - Using State</h1>
            <h2>Counter : {this.state.count}</h2>
            <button onClick={this.onIncrement} >+</button>
            {/* Inline listener */}
            <button onClick={()=>{
                this.setState((prevState)=>({prevState,count: prevState.count -1}))
            }} >-</button>

        </div>
    }
}


const App = () => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))
