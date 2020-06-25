import React from 'react';
import Navbar from '../../components/Navbar';
//import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import Charlotte from './Charlotte.jpg'
import './style.css'
import WorkForBeer from './WorkForBeer.png'
//import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'

function Community() {
  return (
    <div>
      <Navbar />
        <div>
          {/* <h1>{(<Link to='/shop' className="local">BUY QUEEN CITY BEER</Link>)}</h1> */}
          <img src={Charlotte} alt="skyline" className="image" />
          <div>
          <a  href="https://workforyourbeer.com/" target="blank"><img src={WorkForBeer} alt="workforbeer" className="workforbeer"/></a>
          <p className="socialevents">Find social events at breweries in Charlotte!</p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Community;