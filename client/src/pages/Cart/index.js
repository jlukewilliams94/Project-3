import React, { useEffect, useState, useContext } from 'react';
import './style.css'
import CartCard from '../../components/CartCard'
import { Card, Col, Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom'
import totalContext from '../../context/ageContext'

const Cart = props=> {
    const totalControl = useContext(totalContext)
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(!total){
        const itemList = JSON.parse(localStorage.getItem('cart'))
        setItems(itemList)
        }
        totalControl.changeTotal(total)
    }, [total])

    const sum = (price) => {
        setTotal(curr=> curr + price )
        
    }
    
    return (
        
        <div>

            {items ? (
                <>
                    <Row>
                        <h3 className="cart">great choice.</h3>
                    </Row>
                    <Row>
                    {items.map(item => {
                        return (
                           

                                    <CartCard key={item.id}
                                        beerInfo={item}
                                        math={sum}
                                    />
                           
                        )
                    })}
                    </Row>
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
                </>
            ) : (
                    <h2 className="tagline">cart is empty <i className="fa fa-frown-o fa-2x" aria-hidden="true"></i></h2>
                )}

        </div >
    )
}

export default Cart;