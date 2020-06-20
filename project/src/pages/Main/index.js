import React from 'react';
import Navbar from '../../components/Navbar';
//import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import Charlotte from './Charlotte.jpg'
import './style.css'

function Main() {
  return (
    <div>
      <Navbar />
        <div>
          <img src={Charlotte} alt="skyline" className="image" />
        </div>
  
    </div>
  )
}

export default Main;