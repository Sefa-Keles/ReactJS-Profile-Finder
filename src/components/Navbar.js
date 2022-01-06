import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Navbar extends Component {
    //Default variables in case of null
    static defaultProps = {
        title: "Profile Finder",
        icon: "fab fa-github fa-2x"
    }
    render() {
        return (
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <a href="#" className="navbar-brand">
                            <i className={this.props.icon}>{this.props.title}</i>
                        </a>
                    </div>
                </nav>
        )
    }
}

//Determination of mandatory fields
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

