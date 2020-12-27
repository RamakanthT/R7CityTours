import React from 'react';
import "./Navbar.scss";
//import logo from '../../data/images/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <img src="../../data/images/logo.png" alt="cityToursLogo" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        Tours
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;