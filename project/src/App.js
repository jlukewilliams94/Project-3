import React from 'react';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Age from './pages/Age';
import Main from './pages/Main';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import VerifiedRoute from './components/privateRoute'

function App() {

  return (

        <Router>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Age}/>
            <VerifiedRoute path='/main' component={Main}/>

          </Switch>
        </div>
      </Router>
  )
}

export default App;

{/* <div className="App" style={{backgroundImage: `url(${Background})`, backgroundRepeat: "repeat"}}>
      <div className="router">
      <Router >
      <Navbar className="navbar bg-dark "/>
        <Switch className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </Router>
      </div>
      <Footer />
    </div> */}