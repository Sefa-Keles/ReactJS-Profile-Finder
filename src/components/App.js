import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Alert from './Alert'
import Search from './Search'
import About from './About'
import UserDetails from './UserDetails'
import axios from 'axios'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlertMessage = this.setAlertMessage.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUserRepos = this.getUserRepos.bind(this);
        this.state= {
            loading: false,
            users: [],
            user: {},
            repos: [],
            alert: null
        }
    }

    searchUser(keyword){
        this.setState({loading:true});

        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => this.setState({users:res.data.items, loading:false}))
        }, 1000);
    }

    clearUsers(){
        this.setState({users:[]})
    }

    setAlertMessage(msg, type){
        this.setState({alert:{msg, type}})
        setTimeout(() => {
            this.setState({alert:null})
        }, 1000);
    }

    getUser(username){
        this.setState({loading:true});

        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(res => this.setState({user:res.data, loading:false}))
        }, 1000);
    }

    getUserRepos(username){
        this.setState({loading:true});

        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(res => this.setState({repos:res.data, loading:false}))
        }, 1000);
    }

  render() {
    return (
        <BrowserRouter> 
            <Navbar icon="fab fa-github" title="Github's Faces"/> 
            <Alert alert= {this.state.alert} />
            <Switch>
                <Route exact path="/" render= { props=> (
                        <>
                            <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClearButton = {this.state.users.length > 0 ? true : false} setAlertMessage={this.setAlertMessage}/>
                            <Users users={this.state.users} loading={this.state.loading}/>
                        </>
                    )
                }/>
                <Route path="/about" component={About}/>
                <Route path="/user/:login" render={
                    props => (
                        <UserDetails 
                            {...props} 
                            getUser={this.getUser} 
                            user={this.state.user}
                            getUserRepos={this.getUserRepos}
                            repos={this.state.repos}
                            loading={this.state.loading}/>
                        )
                    }
                />
            </Switch>
        </BrowserRouter>
    )
  }
} 

export default App