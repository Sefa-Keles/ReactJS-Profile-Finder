import React, { Component } from 'react'

class User extends Component {
    render() {
        {/*Contents of a user card*/}
        const {avatar_url, html_url, login} = this.props.user;
        return (
            <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="card mt-2">
                    <img src={avatar_url} alt="avatar" className='img-fluid'/>
                        <div className="card-body">
                            <h5 className='card-title'>{login}</h5>
                            <a href={html_url} className='btn btn-primary btn-sm'>Go Pofile</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default User
