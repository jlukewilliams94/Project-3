import React from 'react'
import { Card, Col, CardTitle, Row, Button } from 'react-materialize';
import './cartCard.css';
// import { PayPalButton } from "react-paypal-button-v2";
// import Payment from '../../components/Payment'

function Cart() {
    const beerName = localStorage.getItem('item')
    const beerImage = localStorage.getItem('picture')
    const beerPrice = localStorage.getItem('price')
    return (
        <div>
            <Row>
                <Col
                    xl={2}
                    l={3}
                    m={4}
                    s={12}
                >
                    <Card className="cartCard"
                        header={<CardTitle image={beerImage}></CardTitle>}
                    >
                        <b>Beer:</b> {beerName}<br />
                        <b>Price:</b> {beerPrice}<br />
                        <b>Quantity: </b>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <b>Total:</b>{beerPrice}<br />
                        <Button>Pay Now</Button>
                        {/* <Payment /> */}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cart;