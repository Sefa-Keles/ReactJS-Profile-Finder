import React, { Component, Fragment } from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Axios from "axios"
import axios from "axios"

export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        axios.get("https://api.github.com/users")
        .then(res => this.setState({
            users: res.data
        }))
    }
    render() {
        return (
            //React.Fragment is prevents the div element in the console from appearing
            <Fragment>
                <Navbar title=" Github Profile Finder" icon="fab fa-github fa-2x"/>
                <Users users={this.state.users}/>
            </Fragment>
        )
    }
}

export default App
