import React, { useState } from 'react'
import { Col, Card, CardTitle, Button } from 'react-materialize';
import './beerCard.css'
import Cart from '../CartCard';


const BeerCard = props => {
    //var items = [];
    //const item_id = props.beerInfo.name

    function Add() {
        // items.push(item_id);

        // localStorage.setItem("item", JSON.stringify(items));
        let currentCart = JSON.parse(localStorage.getItem('cart'))
        if (!currentCart) {
            currentCart =[]
        }
        const selectedBeer ={
            item: props.beerInfo.name,
            picture: props.beerInfo.picture,
            price: props.beerInfo.price,
            id: props.beerInfo._id
        }
        currentCart.push(selectedBeer)
         localStorage.setItem('cart', JSON.stringify(currentCart))
    }

    return (
        <Col
            xl={3}
            l={4}
            m={6}
            s={12}

        >
            <Card className="beercard"
                header={<CardTitle image={props.beerInfo.picture}></CardTitle>}
                title={props.beerInfo.name}
            >
                <b>Price:</b> {props.beerInfo.price}<br />
                <b>Description:</b> {props.beerInfo.description}<br />
                <b>Type:</b> {props.beerInfo.type} <br />
                <b>Alcohol Content:</b> {props.beerInfo.alcoholContent}<br />
                <b>User Reviews:</b> {props.beerInfo.userReviews}<br />
                <Button style={{ fontSize: "80%" }} onClick={Add}>Add to Cart</Button>

            </Card>
        </Col>
    )
}

export default BeerCard
