import React from "react"
import ReactDOM from 'react-dom'
import { Header } from './layout/Header/header'
import { Body } from './layout/Body/body'
import { Footer } from './layout/Footer/footer'

const Page = () => <div>
    <Header />
    <Body />
    <Footer />
</div>

const App = () => <Page />


ReactDOM.render(<App />, document.getElementById('root'))