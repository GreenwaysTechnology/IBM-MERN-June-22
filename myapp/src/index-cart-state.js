//state :
import React from 'react'
import ReactDOM from 'react-dom'


class Cart extends React.Component {
    state = {
        items: []  //inital state
    }
    //event listener
    onAdd = () => {
        this.setState(prevState => {
            return {
                items: prevState.items.concat("Item")
            }
        })
    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Cart - Using State</h1>
            <ul>
                {this.state.items.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
            <button onClick={this.onAdd} >Add To Cart</button>
        </div>
    }
}




const App = () => <div>
    <Cart />
</div>
ReactDOM.render(<App />, document.getElementById('root'))
