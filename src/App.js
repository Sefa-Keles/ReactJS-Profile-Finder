import React, { Component, Fragment } from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"

export class App extends Component {
    render() {
        return (
            //React.Fragment is prevents the div element in the console from appearing
            <Fragment>
                <Navbar title=" Github Profile Finder" icon="fab fa-github fa-2x"/>
                <Users/>
            </Fragment>
        )
    }
}

export default App
