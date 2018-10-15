import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import NavbarMenuItem from './NavbarMenuItem';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="navbar__content">
                        <Link to="/">
                            <img src={Logo} className="navbar__logo" />
                        </Link>
                        <ul className="navbar__menu">
                            <NavbarMenuItem link="movies" item="Movies" />
                            <NavbarMenuItem link="series" item="Series" />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
