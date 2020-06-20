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
                        {(<Link to="/main" className="list">Home </Link>)}
                        {(<Link to="/admin" className="list">Admin Login </Link>)}
                        {(<Link to="/shop" className="list">Shop </Link>)}
                    </ul>
                    <ul className="right hide-on-med-and-down menu ">
                        {(<Link to="/cart" className="list"><i className="fa fa-shopping-cart"></i> </Link>)}
                        {(<Link to="/community" className="list">Community </Link>)}
                        {(<Link to="/contact" className="list">Contact Us </Link>)}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;