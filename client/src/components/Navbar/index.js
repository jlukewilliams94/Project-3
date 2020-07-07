import React from 'react';
import './style.css';
import NavLogo from './navlogo.png';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div>

            <nav>
                <div className="nav-wrapper navbar">
                    <a href="/main" className="brand-logo center"><img src={NavLogo} alt="logo"></img></a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>{(<Link to="/main" className="list">home</Link>)}</li>
                        <li>{(<Link to="/shop" className="list">shop </Link>)}</li>
                        <li>{(<Link to="/community" className="list">community</Link>)}</li>
                        <li>{(<Link to="/cart" className="list"><i className="fa fa-shopping-cart"></i></Link>)}</li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>{(<Link to="/main" className="sidelist">home</Link>)}</li>
                <li>{(<Link to="/shop" className="sidelist">shop </Link>)}</li>
                <li>{(<Link to="/community" className="sidelist">community</Link>)}</li>
                <li>{(<Link to="/cart" className="sidelist"><i className="fa fa-shopping-cart"></i></Link>)}</li>
            </ul>
        </div >
    )
}

export default Nav;