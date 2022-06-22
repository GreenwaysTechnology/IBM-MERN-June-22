import React from 'react';
import ReactDOM from 'react-dom'

//Master - Component - Parent
const ProfileMaster = props => {
    // return <ProfileDetails id={props.id} name={props.name} city={props.city} status={props.status} />
    //you dont need to pass indiduval property manually
    //we can use ES 7 "spread operator ..."

    return <ProfileDetails {...props} title="Profile details" />
}
//details Components - Child
const ProfileDetails = props => {
    return <div>
        <h1>{props.title}</h1>
        <h1>id {props.id}</h1>
        <h1>Name {props.name}</h1>
        <h1>City {props.city}</h1>
        <h1>Status {props.status ? "available" : "Not Available"}</h1>
    </div>

}

const App = props => {
    return <div>
        <ProfileMaster id={1} name="subramanian" status={true} city="coimbatore" />
    </div>
}


ReactDOM.render(<App />, document.getElementById('root'))
