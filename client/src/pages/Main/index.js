import React from 'react';
//import Navbar from '../../components/Navbar';
// import { Row } from 'react-materialize';
import './style.css'
//import { Link } from 'react-router-dom';
//import BeerWall from './beerwall.jpg'
// import Birdsong from '../../components/Images/birdsong.png';
// import RC from '../../components/Images/ResidentCulture.png';
// import NoDa from '../../components/Images/NoDa.jpg';
// import Legion from '../../components/Images/Legion.jpg';
//import Footer from '../../components/Footer'
import BeerMap from '../../components/Images/beerMap1.png'
import Charlotte from '../../components/Images/Charlotte.jpg'

function Main() {
  return (
    <div>
       <h1 className="drink">drink local.</h1>
      <img src={Charlotte} alt="skyline" className="image" style={{height: '100%'}} />
        <div className="beer2">
          <img src={BeerMap} alt="beer" className="beer" />
        </div>

        {/* <Row>
          <img src={Birdsong} alt="birdsong" className="localBreweries"/>
          <img src={RC} alt="RC" className="localBreweries"/>
          <img src={NoDa} alt="NoDa" className="localBreweries"/>
          <img src={Legion} alt="Legion" className="localBreweries"/>
          </Row> */}
    </div>
  )
}

export default Main;