import React from 'react';
//import Navbar from '../../components/Navbar';
//import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import Map from '../../components/Images/cltmap.jpg'
import './style.css'
import WorkForBeer from './WorkForBeer.png'
//import { Link } from 'react-router-dom';
//import Footer from '../../components/Footer'

function Community() {
  return (
    <div>
          <h3 className="community">connect with neighbors.</h3>
          <img src={Map} alt="skyline" className="image" />
          <div>
          <a  href="https://workforyourbeer.com/" target="blank"><img src={WorkForBeer} alt="workforbeer" className="workforbeer"/></a>
          <p className="workout">workout first, beer second</p>
          </div>
    </div>
  )
}

export default Community;