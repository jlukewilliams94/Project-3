import React, { useState, useContext, useEffect } from "react";
import './style.css';
import Beer from './beer.mp4'
import 'materialize-css';
import { Button } from 'react-materialize';
import Logo from './logo.png'
import {Redirect} from 'react-router-dom'
import ageC from '../../context/ageContext'
function Age() {
    const [redirect, setRedirect]=useState(false)
    const ageContext = useContext(ageC)
    const Yes =()=>{
        localStorage.setItem('verified', 'true')
        ageContext.onVerify(true)
    }
    const no =()=>{
        localStorage.setItem('verified', 'false')
    }
    useEffect(()=>{
        if(ageContext.verified)setRedirect(true)
    },[ageContext.verified])
    return (
        <div className="mainRow">
            {redirect? <Redirect to="/main"/>:null}
            <video width='100vw' autoPlay muted loop id="myVideo"
                src={Beer} type="video/mp4" />
            <img className="logo center-align valign-wrapper" src={Logo} alt="logo"/>
            <span className="card-title caption content center-align">Are you 21 or older?
                <div>
                    <Button className="btn waves-effect-yellow btn-small" onClick={Yes}>Yes</Button>
                    <Button className="btn waves-effect-yellow btn-small" onClick={no}>No</Button>
                </div>
            </span>
        </div>
    );
}

export default Age;