//component life cycle  :  mount / update /un mount
//mount : render , componentDidMount

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}
class Todo extends React.Component {

    state = {
        error: null,
        isLoaded: false, //spiner status
        todos: []
    }
    //componentDidMount : Ajax calls,any async api calls 
    componentDidMount() {
        console.log('your app is ready')
        //web service call:fetch 

        //for delay test : i use timer
        //todo: remove timer in real time apps, here only for testing delay

        //payload : headers + data
        //json method in fetch will extract only data
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(todos => {
                    this.setState(prevState => {
                        // return { ...prevState, isLoaded: true, todos: prevState.todos.concat(todos) }
                        // return { ...prevState, isLoaded: true, todos: todos}
                        return { ...prevState, isLoaded: true, todos }

                    })
                }).catch(err => {
                    this.setState(prevState => {
                        return { ...prevState, isLoaded: true, error: err }
                    })
                })

        }, 10000)

    }


    //conditional render: how to display ui according to boolean expression
    render() {
        const { error, isLoaded, todos } = this.state;
        if (error) {
            return <Error error={error} />
        } else if (!isLoaded) {
            return <Spinner />
        } else {
            return <div>
                <h1>Todo App</h1>
                <ul>
                    {this.state.todos.map(todo => {
                        return <li key={todo.id}>{todo.title}</li>
                    })}
                </ul>
            </div>
        }

        // return <div>
        //     <h1>Todo App</h1>
        //     <ul>
        //         {this.state.todos.map(todo => {
        //             return <li key={todo.id}>{todo.title}</li>
        //         })}
        //     </ul>
        // </div>
    }
}

const App = () => <div className="container">
    <Todo />
</div>

ReactDOM.render(<App />, document.getElementById('root'))