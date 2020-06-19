import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Age from './pages/Age'
import Main from './pages/Main'
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

function App() {
  
  return (
          <Age />
          <Main />

  );
}

export default App;

{/* <div className="App">
      <div className="router">
        <Router >
          <Switch className="content">
            <Route exact path="/" component={Main} />
            <Route path="*"><Redirect to="/" /></Route>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div> */}