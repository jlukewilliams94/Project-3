import React from "react";
import './style.css';
import Beer from './beer.mp4'
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';


function Age() {

    return (
        <div>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <video className="materialboxed data-caption" width="650" autoPlay muted loop id="myVideo"
                            //width="650" height="100"
                                src={Beer} type="video/mp4" />
                             <div className="content">
                            <span className="card-title caption center-align">Are you over 21?
                            <div>
                             <button className="btn waves-effect waves-light btn-large" href="/">Yes</button>
                             <button className="btn waves-effect waves-light btn-large" href="/">No</button>
                             </div>
                                </span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Age;