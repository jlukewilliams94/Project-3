import React from 'react';
import './style.css'
import CartCard from '../../components/CartCard'

function Cart() {
    return(
        <div>
            <h3 className="cart">great choice.</h3>
            <CartCard/>
        </div>
    )
}

export default Cart;