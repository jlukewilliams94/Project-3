import React from 'react';
import Navbar from '../../components/Navbar';
//import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import Charlotte from './Charlotte.jpg'
import './style.css'
//import { Link } from 'react-router-dom';

function Community() {
  return (
    <div>
      <Navbar />
        <div>
          {/* <h1>{(<Link to='/shop' className="local">BUY QUEEN CITY BEER</Link>)}</h1> */}
          <img src={Charlotte} alt="skyline" className="image" />
        </div>
  
    </div>
  )
}

export default Community;