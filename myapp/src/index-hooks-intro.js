//state :
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// class Counter extends React.Component {

//     state = {
//         count: 0  //inital state
//     }
//     onIncrement = () => {
//         this.setState(prevState => ({ ...prevState, count: prevState.count + 1 }))
//     }

//     render() {
//         console.log(this.state)
//         return <div>
//             <h1>CounterApp - Using State</h1>
//             <h2>Counter : {this.state.count}</h2>
//             <button onClick={this.onIncrement} >+</button>
//         </div>
//     }
// }

const Counter = props => {
    //state 
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(100)
    //literal object 
    const [counter, setCounter] = useState({ value: 10 })

    //listener
    const onIncrement = evt => {
        //state mutation
        // setCount(prevState => {
        //     return prevState + 1
        // })
        setCount(count + 1)
    }

    return <div>
        <h1>Counter App- Using hooks</h1>
        <h2>Counter: {count}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>-</button>
        <hr />
        <h2>Like {like}</h2>
        <button onClick={() => {
            setLike(like + 1)
        }}>Like</button>
        <hr />
        <h1>Literal Object {counter.value}</h1>
        <button onClick={() => {
            setCounter((oldState) => {
                return { ...oldState, value: oldState.value + 1 }
            })
        }}>Like</button>
    </div>
}




const App = () => <div>
    <Counter />
</div>
ReactDOM.render(<App />, document.getElementById('root'))
