import React, { Component, Fragment } from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Search from "./components/Search"
import axios from "axios"

export class App extends Component {
    constructor(props){
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.state = {
            loading: false,
            users: []
        }
    }
    searchUser(keyword){
        this.setState({loading: true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res => this.setState({
            users: res.data.items, 
            loading: false
        }))
    }

    clearUsers(){
        if(this.state.users.length>0){
            this.setState({
                users: []
            })
        }
    }
    render() {
        return (
            //React.Fragment is prevents the div element in the console from appearing
            <Fragment>
                <Navbar title=" Github Profile Finder" icon="fab fa-github fa-2x"/>
                <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClearButton = {this.state.users.length>0?true:false}/>
                <Users users = {this.state.users} loadingState = {this.state.loading}/>
            </Fragment>
        )
    }
}

export default App
