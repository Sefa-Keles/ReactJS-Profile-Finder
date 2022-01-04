import React from 'react'
import PropTypes from 'prop-types';

export class Navbar extends React.Component {
    static defaultProps = {
        title: "Profile Finder",
        icon: "fab fa-github fa-2x"
    }
    render() {
        return (
                <nav className="navbar navbar-dark bg-primary">
                    <a href="#" className="navbar-brand">
                        <i className={this.props.icon}>{this.props.title}</i>
                    </a>
                </nav>
        )
    }
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

