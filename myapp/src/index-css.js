import React from "react"
import ReactDOM from 'react-dom'
//import {what you want to import} folder/folder/fileName
//import { Header } from './layout/Header/header'
import { Header } from './layout/Header'
// import { Body } from './layout/Body/body'
import { Body } from './layout/Body'
// import { Footer } from './layout/Footer/footer'
import { Footer } from './layout/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

//single line comment
/**
 * 
 * this is page
 */
const Page = () => <div className="container" >
    {/* This is header :jsx comment */}
    {/* <Header /> */}
    <Header />
    <Body />
    <Footer />
</div>

const App = () => <Page />

ReactDOM.render(<App />, document.getElementById('root'))