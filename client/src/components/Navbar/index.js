import React from 'react';
import './style.css';
import NavLogo from './navlogo.png';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div>
            <Navbar className="navbar"
                alignLinks="left"
                brand={<b  ><img src={NavLogo} alt="logo"></img></b>}
                // className="brand-logo"
                centerLogo
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <ul>
                    <li>{(<Link to="/main" className="list">home</Link>)}</li>
                    <li>{(<Link to="/shop" className="list">shop </Link>)}</li>
                    <li>{(<Link to="/community" className="list">community</Link>)}</li>
                    <li>{(<Link to="/cart" className="list"><i className="fa fa-shopping-cart"></i></Link>)}</li>
                </ul>
            </Navbar>
        </div >
    )
}

export default Nav;