import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

//class component
class Profile extends React.Component {

    render() {
        //this.props is inside variable of React.Component class
        console.log(this.props)
        const { id, firstName } = this.props
        return <div>
            <h1>Profile details</h1>
            {/* <h1>Id {this.props.id}</h1>
            <h1>Name {this.props.firstName}</h1> */}
            <h1>Id {id}</h1>
            <h1>Name {firstName}</h1>
        </div>
    }
}




const App = () => {
    return <Profile id={1} firstName="Subramaian" />
}

ReactDOM.render(<App />, document.getElementById('root'))