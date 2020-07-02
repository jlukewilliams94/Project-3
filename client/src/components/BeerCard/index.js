import React, { useState } from 'react'
import { Col, Card, CardTitle, Button } from 'react-materialize';
import './beerCard.css'

const BeerCard = props => {
    const Add =()=>{
        localStorage.setItem('item', props.beerInfo.name);
        localStorage.setItem('picture', props.beerInfo.picture);
        localStorage.setItem('price', props.beerInfo.price)
    }

    const [quantity, setQuantity] = useState(0)
    return (
        <Col
            xl={2}
            l={3}
            m={4}
            s={12}
            
        >
            <Card className="beercard"
                header={<CardTitle image={props.beerInfo.picture}></CardTitle>}
                title={props.beerInfo.name}
            >
                <b>Price:</b> {props.beerInfo.price}<br/>
                <b>Description:</b> {props.beerInfo.description}<br/>
                <b>Type:</b> {props.beerInfo.type} <br/>
                <b>Alcohol Content:</b> {props.beerInfo.alcoholContent}<br/> 
                <b>User Reviews:</b> {props.beerInfo.userReviews}<br/>
                <Button onClick={Add}>Add to Cart</Button>
                {/* <span onClick={()=>setQuantity(curr=>curr + 1)}>+</span>{quantity}<span onClick={()=>setQuantity(curr=>{
                    if(curr) {
                        return curr-1
                    }
                    return 0
                })}>-</span> */}
            </Card>
        </Col>
    )
}

export default BeerCard


// // actions={[
                                    // //     <a key={card._id} href="/cart">Add to cart</a>
                                    // // ]}
                                    // // header={<CardTitle href={card.brewerySeed.website} image={card.brewerySeed.logo}>{card.brewerySeed.name}</CardTitle>}
                                    // // revealIcon={<Icon>more_vert</Icon>}
                                    // >
                                        // {/* Beer: {card.brewerySeed.beer.name} <br></br>
                                        //     Price: {card.brewerySeed.beer.price}<br></br>
                                        //     Description: {card.brewerySeed.beer.description}<br></br>
                                        //     Type: {card.brewerySeed.beer.type} <br></br>
                                        //     Alcohol Content: {card.brewerySeed.beer.alcoholContent}<br></br> */}
