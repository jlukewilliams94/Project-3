import React, { useState } from 'react'
import { Col, Card, CardTitle } from 'react-materialize';
import './beerCard.css';
import API from '../../lib/API';

const AdminCard = props => {
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = event => {
        event.preventDefault();
        console.log();

        API.updateBeer()
            .then();
      };

    return (
        <Col
            xl={2}
            l={3}
            m={4}
            s={12}

        >
            <Card className="beercard"
                header={<CardTitle image={props.beerInfo.picture}></CardTitle>}
                title={props.beerInfo.name}>
                {/* <b>Price:</b> {props.beerInfo.price}<br />
                <b>Description:</b> {props.beerInfo.description}<br />
                <b>Type:</b> {props.beerInfo.type} <br />
                <b>Alcohol Content:</b> {props.beerInfo.alcoholContent}<br /> */}
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder={props.beerInfo.quantity} id="quantity" name="quantity" type="text" className="validate" />
                                <label className="active" for="quantity">In Stock</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder={props.beerInfo.price} id="price" name="price" type="text" className="validate" />
                                <label className="active" for="price">Price</label>
                            </div>
                        </div>
                        <input type="submit" class="waves-effect waves-light btn" />
                    </form>
                </div>
            </Card>
        </Col>
    )
};

export default AdminCard;


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
