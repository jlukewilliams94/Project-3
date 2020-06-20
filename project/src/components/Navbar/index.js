import React from 'react';
import Logo from '../../pages/Age/logo.png';
import { Link } from 'react-router-dom';
import './style.css';
//import { Navbar } from 'react-materialize';

function Navbar() {

    return (
        <div>
            <nav className="navbar" style={{ height: "200px" }}>
                <div className="nav-wrapper">
                    <a href="/main" className="brand-logo center">
                        <img src={Logo} alt="logo" />
                    </a>
                    <ul className="left hide-on-med-and-down menu ">
                        {(<Link to="/admin" className="list">Admin Login &nbsp;&nbsp; </Link>)}
                        {(<Link to="/shop" className="list">Shop &nbsp;&nbsp; </Link>)}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;