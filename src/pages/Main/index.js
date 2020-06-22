import React from 'react';
import Navbar from '../../components/Navbar';
import { Row } from 'react-materialize';
import './style.css'
//import { Link } from 'react-router-dom';
import BeerWall from './beerwall.jpg'
import Birdsong from '../../components/Images/birdsong.png';
import RC from '../../components/Images/ResidentCulture.png';
import NoDa from '../../components/Images/NoDa.jpg';
import Legion from '../../components/Images/Legion.jpg';

function Main() {
  return (
    <div>
      <Navbar />
        <div>
          {/* <h1>{(<Link to='/shop' className="local">BUY QUEEN CITY BEER</Link>)}</h1> */}
          <img src={BeerWall} alt="beer" className="beer"/> 
          <Row>
          <img src={Birdsong} alt="birdsong" className="localBreweries"/>
          <img src={RC} alt="RC" className="localBreweries"/>
          <img src={NoDa} alt="NoDa" className="localBreweries"/>
          <img src={Legion} alt="Legion" className="localBreweries"/>
          </Row>
        </div>
  
    </div>
  )
}

export default Main;