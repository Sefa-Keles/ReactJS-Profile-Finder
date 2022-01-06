import React, { Component, Fragment } from "react"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Search from "./components/Search"
import Alert from "./components/Alert"
import axios from "axios"

export class App extends Component {
    constructor(props){
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.state = {
            loading: false,
            users: [],
            alert: null
        }
    }
    //Pulling data from api
    searchUser(keyword){
        this.setState({loading: true})
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res => this.setState({
            users: res.data.items, 
            loading: false
        }))
    }
    //Removing users from the page
    clearUsers(){
        if(this.state.users.length>0){
            this.setState({
                users: []
            })
        }
    }
    //Managing the alert popup
    setAlert(message, errType){
        this.setState({
            alert: {message,errType}
        })
        setTimeout(() => {
            this.setState({
                alert: null
            })
        }, 3000);
    }
    render() {
        return (
            //React.Fragment is prevents the div element in the console from appearing
            <Fragment>
                <Navbar title=" Github Profile Finder" icon="fab fa-github fa-2x"/>
                <Alert alert={this.state.alert}/>
                <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClearButton = {this.state.users.length>0?true:false} setAlert={this.setAlert}/>
                <Users users = {this.state.users} loadingState = {this.state.loading}/>
            </Fragment>
        )
    }
}

export default App
