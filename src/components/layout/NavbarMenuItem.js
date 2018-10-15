import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMenuItem({ link, item }) {
    return (
        <li className="navbar__menu-item">
            <Link to={link} className="navbar__menu-item-link">{item}</Link>
        </li>
    )
}

export default NavbarMenuItem
