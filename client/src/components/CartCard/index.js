import React, { useState, useEffect } from 'react'
import { Card, CardTitle, Col } from 'react-materialize';
import './cartCard.css';
// import { PayPalButton } from "react-paypal-button-v2";
// import Payment from '../../components/Payment'

const Cart = props => {

    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        props.math(props.beerInfo.price)
    }, [])
    const add = () => {
        setQuantity(curr => curr + 1)
        props.math(props.beerInfo.price)
    }
    const subtract = () => {
        if (quantity !== 0) {
            setQuantity(curr => curr - 1)
            props.math(-props.beerInfo.price)
        }
    }

    return (
        <Col
            xl={3}
            l={4}
            m={5}
            s={12}
        >

            <Card
                header={<CardTitle image={props.beerInfo.picture}></CardTitle>}
            >
                <div className="cartCard">
                    <b>Beer:</b> {props.beerInfo.item}<br />
                    <b>Price:</b> {props.beerInfo.price}<br />
                    <b>Quantity:</b>
                    <span onClick={add}>&nbsp;<i className="fa fa-lg quantity fa-plus-square" aria-hidden="true"></i>&nbsp;</span>{quantity}<span onClick={subtract}>&nbsp;<i className="fa fa-lg quantity fa-minus-square" aria-hidden="true"></i>&nbsp;</span>
                </div>
            </Card>
        </Col>

    )
}

export default Cart;