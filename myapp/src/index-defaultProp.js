import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

const Profile = props => {
    return <div className="container">
        <h1>Profile details</h1>
        <h2>Id : {props.id}</h2>
        <h2>Name {props.name.toUpperCase()}</h2>
        <h2>Status {props.status ? "Avaiable" : "Not Available"}</h2>
    </div>
}
//defaultProps : default Props are supplied suppose if there is no property given 
/**
 * 
 * ComponentName.defaultProps = {
 *  prop1:defaultValue
 * }
 */
Profile.defaultProps = {
    id: 0,
    name: '',
    status: false
}



const App = () => {
    return <div>
        <Profile id={1} name="Subramaian" status={true} />
        <Profile />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))