import React from 'react'
import ReactDOM from 'react-dom'

//component is designed based on pure function
// function Greeter(props) {
//     //side effect : you  cant modify the property because it is readonly:pure function   // props.name = "Ram"
//     return <h1>Hello {props.name}</h1>
// }
const Greeter = (props) => {
    //side effect : you  cant modify the property because it is readonly:pure function   // props.name = "Ram" //mutation
    return <h1>Hello {props.name}</h1>
}


const App = () => <div>
    <Greeter name="Subramanian" />
</div>

ReactDOM.render(<App />, document.getElementById('root'))