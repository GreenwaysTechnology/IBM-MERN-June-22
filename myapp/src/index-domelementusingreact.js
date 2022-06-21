//dom element using react 
import React from 'react';
import ReactDOM from 'react-dom';
//create node/create Element 
const Heading = <h1>Hello React</h1>
//get div node so that i can insert into that 
//const rootElement = document.getElementById('root')
//rootElement.appendChild(Heading)
//ReactDOM.render(Heading, rootElement)
ReactDOM.render(Heading,document.getElementById('root'))