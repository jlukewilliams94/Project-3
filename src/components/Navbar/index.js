import React from 'react';
//import Logo from '../../pages/Age/logo.png';
import { Link } from 'react-router-dom';
import './style.css';
import NavLogo from './navlogo.png';
//import { Navbar } from 'react-materialize';

function Navbar() {

    return (
        <div>
            <nav className="navbar" style={{height: "70px"}}>
                <div className="nav-wrapper">
                    
                    <span className="left hide-on-med-and-down menu ">
                        {(<Link to="/main" className="list"> &nbsp;&nbsp;&nbsp; Home &nbsp;&nbsp;&nbsp;&nbsp;</Link>)}
                        {(<Link to="/admin" className="list">Admin Login &nbsp;&nbsp;&nbsp;&nbsp; </Link>)}
                        {(<Link to="/shop" className="list">Shop </Link>)}
                    </span>
                    <a href="/main" className="brand-logo center">
                        <img src={NavLogo} alt="logo" />
                    </a>
                    <span className="right hide-on-med-and-down menu ">
                        {(<Link to="/cart" className="list"><i className="fa fa-shopping-cart"></i>&nbsp; </Link>)}
                        {(<Link to="/community" className="list"> &nbsp;&nbsp;&nbsp;&nbsp;Community </Link>)}
                        {(<Link to="/contact" className="list"> &nbsp;&nbsp;&nbsp;&nbsp;Contact Us &nbsp;&nbsp;&nbsp; </Link>)}
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;