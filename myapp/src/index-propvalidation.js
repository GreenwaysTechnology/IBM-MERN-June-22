import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

const Profile = props => {
    return <div className="container">
        <h1>Profile details</h1>
        <h2>Id : {props.id}</h2>
        <h2>Name {props.name.toUpperCase()}</h2>
        <h2>Status {props.status ? "Avaiable" : "Not Available"}</h2>
    </div>
}
//default props 
Profile.defaultProps = {
    id: 0,
    name: '',
    status: false
}
//prop validation
Profile.propTypes = {
    id: PropTypes.number,
    name:PropTypes.string,
    status:PropTypes.bool
}


const App = () => {
    return <div>
        {/* <Profile id="89" name="Subramaian" status="done" /> */}
        {/* <Profile id={89} name="Subramaian" status="done" /> */}
        <Profile id={89} name="Subramaian" status={true} />

        <Profile />
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))