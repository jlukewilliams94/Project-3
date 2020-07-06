import React, { useEffect, useState, useContext } from 'react'
import { TextInput, Col, Row } from 'react-materialize';
import './style.css'
import { PayPalButton } from "react-paypal-button-v2"

import totalContext from '../../context/ageContext'

const Checkout =props=> {
    const totalControl = useContext(totalContext)
    const [total, setTotal]= useState(0) 
    useEffect(()=>{
        setTotal(totalControl.total)
        console.log(totalControl.total)
    },[])


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
                <b style={{ fontSize: '20px' }}>Total: {total} </b> <br />
                
                <PayPalButton
                    amount={total}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        });
                    }}
                />
            </Col>
        </div>
    )
}

export default Checkout