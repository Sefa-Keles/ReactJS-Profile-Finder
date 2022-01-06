import React, { Component } from 'react'
import User from "./User"
import Loading from "./Loading"

class Users extends Component {
    render() {
        {/*Listing all users*/}
        if(this.props.loadingState){
            return <Loading/>
        }else{
            return (
                <div className='container mt-3'>
                    <div className="row">
                        {this.props.users.map(user => (
                            <User user={user} key={user.id}/>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Users
