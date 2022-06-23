//state :
import React from 'react'
import ReactDOM from 'react-dom'


class Counter extends React.Component {

    //state 
    //1.declare state 2.How to mutate(change) 3.After mutate,how to update the screen(ui)
    //1.declare state 
    state = {
        //component spefic data
        count: 0  //inital state
    }
    //event listener
    onIncrement = () => {
        //  alert('Hello')
        //inside listener we need to change(mutate) the state
        //this.state.count++
        // this.render()
        //call setState
        // this.setState(function (prevState) {
        //     //state mutation logic

        //     //updater function must return object 
        //     // return {
        //     //     count: prevState.count+1
        //     // }
        //     //  return Object.assign({}, prevState, { count: prevState.count + 1 })
        //     return { ...prevState, count: prevState.count + 1 }

        // })
        // this.setState((prevState) => {
        //     return { ...prevState, count: prevState.count + 1 }
        // })
        this.setState(prevState => ({ ...prevState, count: prevState.count + 1 }))
    }

    //render method must be called by react engine
    //when ever render is called by react engine, only ui updates, we see new changes

    render() {
        console.log(this.state)
        return <div>
            <h1>CounterApp - Using State</h1>
            <h2>Counter : {this.state.count}</h2>
            <button onClick={this.onIncrement} >+</button>
        </div>
    }
}




const App = () => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))
