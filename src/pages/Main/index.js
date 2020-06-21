import React from 'react';
import Navbar from '../../components/Navbar';
//import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';
import './style.css'
//import { Link } from 'react-router-dom';
import BeerWall from './beerwall.jpg'

function Main() {
  return (
    <div>
      <Navbar />
        <div>
          {/* <h1>{(<Link to='/shop' className="local">BUY QUEEN CITY BEER</Link>)}</h1> */}
          <img src={BeerWall} alt="beer" className="beer" />
        </div>
  
    </div>
  )
}

export default Main;