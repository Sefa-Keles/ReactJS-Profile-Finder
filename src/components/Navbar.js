import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

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
                        <Link to="/" className="navbar-brand">
                            <i className={this.props.icon}>{this.props.title}</i>
                        </Link>
                        <div>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link to="about" className="nav-link">About</Link>
                                </li>
                            </ul>
                        </div>
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

