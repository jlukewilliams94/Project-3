import React from 'react'
import { TextInput, Col, Row, Button } from 'react-materialize';
import './style.css'

function Checkout() {
    return (
        <div>
            <h3 className="thanks">thanks for your order!</h3>
            <Col className="checkoutForm"
            s={6}
           >
            <TextInput
                id="TextInput-4"
                placeholder="Name"
            />
            <TextInput
                id="TextInput-5"
                placeholder="Email"
            />
            <TextInput
                id="TextInput-6"
                placeholder="Address Line 1"
            />
            <TextInput
                id="TextInput-7"
                placeholder="Address Line 2"
                />
                <Row>
            <TextInput
                id="TextInput-8"
                placeholder="City"
                />
            <TextInput
                id="TextInput-9"
                placeholder="State"
                />
            <TextInput
                id="TextInput-10"
                placeholder="Zip Code"
                />
                </Row>
            <b style={{fontSize: '20px'}}>Total: </b> <br/>
            <Button>PayPal Link</Button>
            </Col>
        </div>
    )
}

export default Checkout