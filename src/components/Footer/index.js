import React from 'react';
//import { Footer } from 'react-materialize';
import './style.css';
import Admin from '../../pages/Admin'
import Contact from '../../pages/Contact'
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <footer className="page-footer foot">
            <div className="footer-copyright">
                <div className="container center">
                    Copyright © 2020 Tapped Out
                    {(<Link to="/Admin" className="white-text text-lighten-4 left">Admin Login </Link>)}
                    {(<Link to="/Contact" className="white-text text-lighten-4 contact right">Contact Us </Link>)}
                </div>
            </div>
        </footer>

    )
}

export default Foot;