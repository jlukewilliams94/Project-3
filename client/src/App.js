import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Age from './pages/Age';
import Main from './pages/Main';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
import Cart from './pages/Cart'
import Community from './pages/Community';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout'
import 'materialize-css';
import Nav from './components/Navbar'
import Footer from './components/Footer'
import AgeContext from './context/ageContext'
import VerifiedRoute from './components/privateRoute'

function App() {
  const [total, setTotal] = useState(0)
  const [verified, setVerified] = useState({
    verified: false,
    onVerify: function () {
      setVerified({ ...verified, verified: true })
    },
    total:total,
    changeTotal: function (newtotal){
      console.log('test',newtotal)
      setVerified(curr=>{return{...curr, total:newtotal}})
    }
  });
  useEffect(() => {
    const currentStatus = localStorage.getItem('verified')
    if (currentStatus === 'true') {
      setVerified({ ...verified, verified: true })
    }
  }, [])
  return (
    <AgeContext.Provider value={verified}>
      <Router>
        {verified.verified && <Nav />}
        <div className="main">
          <Switch>
            <Route exact path="/" component={Age} />
            <VerifiedRoute path='/main' component={Main} />
            <VerifiedRoute exact path="/admin" component={Admin} />
            <VerifiedRoute exact path="/shop" component={Shop} />
            <VerifiedRoute exact path="/cart" component={Cart} changeTotal={setTotal} />
            <VerifiedRoute exact path="/community" component={Community} />
            <VerifiedRoute exact path="/contact" component={Contact} />
            <VerifiedRoute exact path="/checkout" component={Checkout} total={total} />
          </Switch>
        </div>
        {verified.verified && <Footer />}
      </Router>
    </AgeContext.Provider>
  )
}

export default App;