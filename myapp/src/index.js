//router
import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


//redux
//biz logic : reducer : pure function 
const counterReducer = (state = {
    count: 10
}, action) => {
    switch (action.type) {
        case 'counter/increment':
            //immutable logic
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}
//create store 
const store = createStore(counterReducer)
/////////////////////////////////////////////////////////////////////////////////////
//react 
const Counter = props => {

    const counter = useSelector(state => {
        return state.count
    })
    const dispatch = useDispatch()

    //event listener
    const onIncrement = () => {

        dispatch({
            type: 'counter/increment'
        })
    }

    return <div>
        <h1>Counter App Using React - Redux</h1>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}

//Layout
const Layout = () => {
    // menus
    return <div><nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/transcations">Transactions</Link>
            </li>
            <li>
                <Link to="/counter">Redux-Counter</Link>
            </li>
        </ul>
    </nav>
        <hr />

        {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
        <Outlet />
    </div>
}

const Home = () => <h1>IBM-home</h1>
const About = () => <h1>IBM-about</h1>
const Dashboard = () => <h1>IBM-dashboard</h1>
const Transactions = () => <h1>TransactionPage</h1>




const App = () => {

    return <Provider store={store}>
        {/* Router */}
        <BrowserRouter>
            <Routes>
                {/* root route */}
                <Route path="/" element={<Layout />}>
                    {/* Child routes */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transcations" element={<Transactions />} />
                    <Route path="counter" element={<Counter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
}

ReactDOM.render(<App />, document.getElementById('root'))
