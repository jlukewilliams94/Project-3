import React from 'react';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Age from './pages/Age';
import Main from './pages/Main';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
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
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </div>
      </Router>
  )
}

export default App;