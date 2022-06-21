//component creational pattern  - functions pattern 
import React from 'react'
import ReactDOM from 'react-dom'

//functions
//Heading is component Name
// function Heading() {
//     //return component 
//     return <h1>Hello React!!</h1>
// }
//es 6 arrow functions
// const Heading = () => {
//     //return component 
//     return <h1>Hello React!!</h1>
// }

const Heading = () => <h1>Hello React!!</h1>
//calling function like below is not recommended because it uses imperative style
// ReactDOM.render(Heading(), document.getElementById('root'))

//this more readable syntax;declartive syntax
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))