import React from 'react'
import Navbar from './Navbar'
import Alert from './Alert'
import About from './About'
import UserDetails from './UserDetails'
import Home from './Home'
import NotFound from './NotFound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GithubState from '../context/github/githubState'
import AlertState from '../context/alert/alertState'

const App = () =>  {

    return (
        <GithubState>
            <AlertState>
                <BrowserRouter> 
                    <Navbar icon="fab fa-github" title="Github's Faces"/> 
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/user/:login" component={UserDetails}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
} 

export default App