import React from 'react';
import Flight from './flight.jpg'
import './style.css'
import { Col, Row, TextInput, Textarea, Button } from 'react-materialize';

function Contact() {
    return (
        <div>
            <img src={Flight} alt="flight" className="flight" />
            <div className="login">
                <Col>
                <Row>
                    <h3 className="contactus">Send us some love!</h3>
                </Row>
                    <Row>
                        <TextInput
                            id="TextInput-7"
                            label="Name"
                        />
                    </Row>
                    <Row>
                        <TextInput
                            id="TextInput-6"
                            label="Email"
                        />
                    </Row>
                    <Row>
                        <Textarea
                            id="Textarea-12"
                            label="Comment or Question"
                            l={12}
                            m={12}
                            s={12}
                            xl={12}
                        />
                    </Row>
                    <Button>Send</Button>
                </Col>
            </div>
        </div>
    )
}

export default Contact;