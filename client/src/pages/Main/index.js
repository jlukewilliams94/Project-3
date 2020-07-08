import React from 'react';
import './style.css'
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
    </div>
  )
}

export default Main;