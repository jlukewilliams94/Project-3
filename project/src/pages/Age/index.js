import React, { useState } from "react";
import './style.css';
import Beer from './beer.mp4'
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import Logo from './logo.png'
import {Redirect} from 'react-router-dom'

function Age() {
    const [redirect, setRedirect]=useState(false)
    const Yes =()=>{
        localStorage.setItem('verified', 'true')
        setRedirect(true)
    }
    const no =()=>{
        localStorage.setItem('verified', 'false')
    }

    return (
        <div className="mainRow">
            {redirect? <Redirect to="/main"/>:null}
            <video width='100vw' autoPlay muted loop id="myVideo"
                //width="650" height="100"
                src={Beer} type="video/mp4" />
            <img className=" center-align valign-wrapper logo" src={Logo} alt="logo" />
            <span className="card-title caption content center-align">Are you 21 or older?
                <div>
                    <Button className="btn waves-effect-yellow btn-small" href="/" onClick={Yes}>Yes</Button>
                    <Button className="btn waves-effect-yellow btn-small" href="/" onClick={no}>No</Button>
                </div>
            </span>
        </div>



    );
}

export default Age;