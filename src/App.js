import React from 'react';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Age from './pages/Age';
import Main from './pages/Main';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
import Cart from './pages/Cart'
import Community from './pages/Community';
import Contact from './pages/Contact';
import 'materialize-css';
//import { Button, Card, Row, Col } from 'react-materialize';
import VerifiedRoute from './components/privateRoute'

function App() {

  return (

        <Router>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Age}/>
            <VerifiedRoute path='/main' component={Main}/>
            <VerifiedRoute exact path="/admin" component={Admin} />
            <VerifiedRoute exact path="/shop" component={Shop} />
            <VerifiedRoute exact path="/cart" component={Cart} />
            <VerifiedRoute exact path="/community" component={Community} />
            <VerifiedRoute exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
  )
}

export default App;