import React from 'react';
import Navbar from "../../components/Navbar";
import { Row, Col, TextInput } from 'react-materialize';
import './style.css'

function Admin() {
    return (
        <div>
            <Navbar />
            <Col>
                <Row>
                    <h3>Admin Page</h3>
                </Row>
                <Row>
                    <TextInput
                        email
                        id="TextInput-6"
                        label="Email"
                    //validate
                    />
                </Row>
                <Row>

                    <TextInput
                        id="TextInput-6"
                        label="Password"
                    //password
                    />
                </Row>
            </Col>
        </div >
    )
}

export default Admin;