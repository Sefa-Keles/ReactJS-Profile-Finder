import React, { Component } from 'react'
import Navbar from './components/Navbar'

export class App extends Component {
    render() {
        return (
            <div>
                <Navbar title=" Github Profile Finder" icon="fab fa-github fa-2x"/>
            </div>
        )
    }
}

export default App
