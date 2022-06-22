//List
import React from 'react';
import ReactDOM from 'react-dom'
import TODOS from './mock-data/todos'
import 'bootstrap/dist/css/bootstrap.css'

const List = props => {
    return <div>
        {/* List view */}
        <ul>
            {/* map is pure function */}
            {/* {props.numList.map(i => {
                return <li>{i}</li>
            })} */}
            {props.numList.map(i => <li key={i}>{i}</li>)}
        </ul>

    </div>
}

const Todo = props => <div>
    {/* Card View */}
    {
        props.todos.map(todo => {
            return <div className="card" key={todo.id}>
                <div className="card-body">
                    <h1>{todo.id}</h1>
                    <h3>{todo.title}</h3>
                </div>
            </div>
        })
    }
</div>


const App = props => <div>
    <List numList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    <Todo todos={TODOS} />
</div>

ReactDOM.render(<App />, document.getElementById('root'))