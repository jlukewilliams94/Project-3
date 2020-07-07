import React, { useState } from 'react'
import { Col, Card, CardTitle } from 'react-materialize';
import './beerCard.css';
import API from '../../lib/API';

const AdminCard = props => {
    const [beer, setBeer] = useState({id: props.beerInfo._id, price: props.beerInfo.price, quantity: props.beerInfo.quantity});

    let handlePriceChange = e => {
        setBeer({...beer, price: parseFloat(e.target.value)});
     };
     let handleQuantityChange = e => {
        setBeer({...beer, quantity: parseInt(e.target.value)});
     };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(beer);
        
        API.updateBeer(beer)
            .then(console.log("Done!"));
      };

    return (
        <Col
            xl={3}
            l={4}
            m={6}
            s={12}

        >
            <Card className="adminCard"
                header={<CardTitle image={props.beerInfo.picture}></CardTitle>}
                title={props.beerInfo.name}>
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input defaultValue={props.beerInfo.quantity} 
                                    id="quantity" 
                                    name="quantity" 
                                    type="text" 
                                    className="validate" 
                                    onChange={(e) => {handleQuantityChange(e)}}/>
                                <label className="active" for="quantity">In Stock</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input defaultValue={props.beerInfo.price} 
                                id="price" 
                                name="price" 
                                type="text" 
                                className="validate"
                                onChange={(e) => {handlePriceChange(e)}}/>
                                <label className="active" for="price">Price</label>
                            </div>
                        </div>
                        <input type="submit" className="waves-effect waves-light btn" />
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
