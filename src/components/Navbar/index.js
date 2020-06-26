import React from 'react';
//import Logo from '../../pages/Age/logo.png';
import { Link } from 'react-router-dom';
import './style.css';
import NavLogo from './navlogo.png';
import { Navbar, NavItem, Icon } from 'react-materialize';
//import Shop from '../../pages/Shop'

function Nav() {

    return (

        // <div>
        //     <nav className="navbar " style={{ height: "90px" }}>
        //         <div className="nav-wrapper">

        //             <span className="left hide-on-med-and-down menu ">
        //                 {(<Link to="/main" className="list"> &nbsp;&nbsp;&nbsp; home &nbsp;&nbsp;&nbsp;&nbsp;</Link>)}
        //                 {(<Link to="/shop" className="list">shop </Link>)}
        //             </span>
        //             <a href="/main" className="brand-logo center">
        //                 <img className="navlogo" src={NavLogo} alt="logo" />
        //             </a>
        //             <span className="right hide-on-med-and-down menu ">
        //                 {(<Link to="/cart" className="list"><i className="fa fa-shopping-cart"></i>&nbsp; </Link>)}
        //                 {(<Link to="/community" className="list"> &nbsp;&nbsp;&nbsp;&nbsp;community &nbsp;&nbsp;&nbsp;</Link>)}
        //             </span>
        //         </div>
        //     </nav>
        //     <ul class="sidenav" id="mobile-demo">
        //         {/* <li><a {(<Link to="/main" className="list"> home </Link>)}></a></li> */}
        //         <li><a href="badges.html">Components</a></li>
        //         <li><a href="collapsible.html">Javascript</a></li>
        //         <li><a href="mobile.html">Mobile</a></li>
        //     </ul>
        // </div>

        <div>
            <Navbar className="navbar"
                alignLinks="left"
                brand={<a className="brand-logo" href="main"><img  src={NavLogo} alt="logo"></img></a>}
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
            <NavItem className="list" href='./main'>
                    Home
            </NavItem>
            <NavItem className="list" href='./shop'>
                    Shop
            </NavItem>    
            <NavItem className="list" href='./community'>
                    Community
            </NavItem>
            <NavItem className="list" href='./cart'>
            <i className="fa fa-shopping-cart"></i>

            </NavItem>

        </Navbar>
        </div >
    )
}

export default Nav;