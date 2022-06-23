//how to get input from the user 
import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


class UserInput extends React.Component {

    //state to hold user input
    state = {
        text: 'default'
    }
    onUpdate = evt => {
        // console.log('listener is called')
        //read text box value
        console.log(evt.target.value)
        this.setState(prvState => {
            return { ...prvState, text: evt.target.value }
        })
    }
    render() {
        return <div>
            <h1>User Input Application</h1>
            <h2>{this.state.text}</h2>
            <input onChange={this.onUpdate} />
        </div>
    }
}

const App = props => <div>
    <UserInput />
</div>
ReactDOM.render(<App />, document.getElementById('root'))