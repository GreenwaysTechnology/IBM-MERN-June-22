//component creational pattern  - class pattern 
import React from 'react'
import ReactDOM from 'react-dom'

class Heading extends React.Component {
    //override the method called render
    render() {
        return <h1>Hello  React!!!</h1>
    }

}

ReactDOM.render(<Heading></Heading>, document.getElementById('root'))