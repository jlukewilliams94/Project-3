import React, { useState } from 'react';
// import Navbar from "../../components/Navbar";
// import Footer from '../../components/Footer'
import { Row, Col, TextInput, Button } from 'react-materialize';
import './style.css'
import API from '../../lib/API'
import {Redirect} from  'react-router-dom'
import Beersign from './beersign.jpg'

function Admin() {
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] =useState(false)
    const login =()=>{
      const results=  API.Users.login(email, password)
        console.log(results)
        if(results.email){
            setRedirect(true)
        }
    }
    if(redirect)return(<Redirect to='/adminSite' />)
    return (
        <div>
            <h3 className="hello">Hello there, Rad Employee!</h3>
            <img src={Beersign} alt="beersign" className="beersign"/>
            <div className="login">
            <Col>
                <Row>
                    <TextInput
                        email
                        id="TextInput-6"
                        label="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        
                    //validate
                    />
                </Row>
                <Row>

                    <TextInput
                        id="TextInput-7"
                        label="Password"
                        type= "password"
                    //password
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                </Row>
                    <Button onClick={login}>Login</Button>
            </Col>
            </div>
        </div >
    )
}

export default Admin;