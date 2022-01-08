import React, { Component, Fragment } from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";
import UserDetails from "./components/UserDetails";
import axios from "axios";

export class App extends Component {
    constructor(props){
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUserRepos = this.getUserRepos.bind(this);
        this.state = {
            loading: false,
            users: [],
            user: {},
            repos: [],
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

    getUser(username){
        this.setState({
            loading:true
        })
        axios.get(`https://api.github.com/users/${username}`)
        .then(res => this.setState({
            user: res.data, 
            loading: false
        }))
    }
    getUserRepos(username){
        this.setState({
            loading:true
        })
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => this.setState({
            repos: res.data, 
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
            <BrowserRouter>
                <Navbar title=" Github Profile Finder" icon="fab fa-github fa-2x"/>
                <Alert alert={this.state.alert}/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <> {/*Fragment*/}
                            <Search 
                                searchUser={this.searchUser} 
                                clearUsers={this.clearUsers} 
                                showClearButton = {this.state.users.length>0?true:false} 
                                setAlert={this.setAlert}
                            />
                            <Users users = {this.state.users} loadingState = {this.state.loading}/>
                        </> 
                        )
                    }
                    />
                    <Route path="/about" component={About} />
                    <Route path="/user/:login" render={props =>(
                        <UserDetails 
                        {...props} 
                        user = {this.state.user} 
                        repos = {this.state.repos}
                        getUserRepos = {this.getUserRepos}
                        getUser = {this.getUser} 
                        loadingState = {this.state.loading}/>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
