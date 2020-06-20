import React from 'react';
import Logo from '../Age/logo.png';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import { Navbar } from 'react-materialize';

function Navbar() {
    return (
        <div>
            <nav className="navbar" style={{ height: "200px" }}>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo center">
                        <img src={Logo} alt="logo" />
                    </a>
                    <ul className="left hide-on-med-and-down menu ">
                        {location !== "/admin" && (<Link to="/admin" className="list">Admin Login &nbsp;&nbsp; </Link>)}
                        {/* <li className="item black-text"><a href="/">Admin Login</a></li> */}
                        <li className="item" ><a href="/">Shop</a></li>
                        <li className="item"><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;