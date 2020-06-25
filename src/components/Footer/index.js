import React from 'react';
//import { Footer } from 'react-materialize';
import './style.css';
import Admin from '../../pages/Admin'
import Contact from '../../pages/Contact'
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <footer class="page-footer foot">
            <div class="footer-copyright">
                <div class="container center">
                    Copyright © 2020 Tapped Out
                    {<Link><a class="white-text text-lighten-4 left" href={Admin}>Admin Login</a></Link>}
                    {<Link><a class="white-text text-lighten-4 contact right" href={Contact}>&nbsp;&nbsp;&nbsp;Contact Us</a></Link>}
                </div>
            </div>
        </footer>

    )
}

export default Foot;