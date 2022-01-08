import React, { Component } from 'react'

class UserDetails extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        return (
            <div>
                USER DETAILS PAGE
            </div>
        )
    }
}

export default UserDetails
