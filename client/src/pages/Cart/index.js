import React, { useEffect, useState } from 'react';
import './style.css'
import CartCard from '../../components/CartCard'
import { Card, Col, Row, Button } from 'react-materialize';
import Checkout from '../Checkout'
import { Link } from 'react-router-dom'


function Cart() {

    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const itemList = JSON.parse(localStorage.getItem('cart'))
        setItems(itemList)
    }, [])

    const sum = (price) => {
        setTotal(currTotal => currTotal + price)
    }

    return (
        <div>

            {(items.length > 0) ? (
                items.map(item => {
                    return (
                        <div>
                            <Row>
                                <h3 className="cart">great choice.</h3>
                            </Row>

                            <Row>
                                <CartCard key={item}
                                    beerInfo={item}
                                    math={sum}
                                />
                            </Row>
                        </div>
                    )
                })
            ) : (
                    <h2 className="tagline">cart is empty <i className="fa fa-frown-o fa-2x" aria-hidden="true"></i></h2>
                )}
            <Row>
                <Col>
                    <Card>
                        <div className="cartCard">
                            <b>Total:</b> {total.toFixed(2)}<br />
                        </div>
                        <Button>{(<Link to="/checkout" className="checkoutBtn">Checkout</Link>)}</Button>
                </Card>
            </Col>

        </Row>
   
        </div >
    )
}

export default Cart;