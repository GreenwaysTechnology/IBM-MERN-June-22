//component creational pattern  - class pattern 
import React from 'react'
import ReactDOM from 'react-dom'

// const Heading= ()=><h1>Hello React => this error
// const Heading = () => <h1>Hello React</h1>

const Heading = () => <div>
    <h1>IBM</h1>
    <p>Hello this react</p>
</div>

//self closing <Element/> : the element has no closing element/child element
ReactDOM.render(<Heading />, document.getElementById('root'))