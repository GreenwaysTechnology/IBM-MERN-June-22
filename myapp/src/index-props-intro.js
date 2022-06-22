import React from "react";
import ReactDOM from "react-dom";


//child component
//args 
// function Greeter(message, name) {
//     return <h1>{message} {name}</h1> //return object - object 
// }

//here myvariable will hold properties send by parent component
//myvariable holds values as object(literalobject)
// function Greeter(myvariable) {
//     console.log(myvariable)
//     return <h1>{myvariable.message} {myvariable.name}</h1> //return object - object 
// }

//props - props just variable by convention
//props = {name:'',message:''}
// function Greeter(props) {
//     console.log(props)
//     return <h1>{props.message} {props.name}</h1> //return object - object 
// }
// const Greeter = props => <h1>{props.message} {props.name}</h1>

const Greeter = ({ message, name }) => <h1>{message} {name}</h1>


//Parent Compoent
const App = () => {
    //return Greeter('Hai', 'Subramanian')
    //local variable 
    const name = "Ram"
    const message = "Welcome"
    return <div>
        <Greeter message="Hello" name="Subramanian" />
        <Greeter message="Hello" name="Geetha" />
        <Greeter message="Hello" name="Priya" />
        <Greeter message={message} name={name}  />

    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))