import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Row, Col, Card, Icon, CardTitle, List } from 'react-materialize';
import './style.css'
import API from '../../lib/API'

// name: "NoDa Brewing Company",
// logo: "",
// location: "Noda, Charlotte",
// website: "http://nodabrewing.com",
// description: "",
// beers =[
//     {
//         name: "Hop Drop 'N' Roll",
//         picture: "",
//         price: "",
//         description: "",
//         type: "IPA",
//         alcoholContent: "",
//         quantity: "",
//         userReviews = {},
//     },



function Shop() {

    const [cards, setCards] = useState([])
    //const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadCards()
    }, [])

    function loadCards() {
        API.getCards()
            .then(res =>
                setCards(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Navbar />
            <h1>Shop</h1>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    {cards.length ? (
                        <List>

                            {cards.map(card => {
                                return (
            
                                        <Card className="beercard"
                                            actions={[
                                                <a key={card._id} href="/cart">Add to cart</a>
                                            ]}
                                            header={<CardTitle href={card.website} image={card.logo}>{card.name}</CardTitle>}
                                            revealIcon={<Icon>more_vert</Icon>}
                                        >
                                            Beer: {card.beer.name} <br></br>
                                            Price: {card.beer.price}<br></br>
                                            Description: {card.beer.description}<br></br>
                                            Type: {card.beer.type} <br></br>
                                            Alcohol Content: {card.beer.alcoholContent}<br></br>
                                            User Reviews: {card.beer.userReviews} <br></br>
                                        </Card>
    
                                );
                            })}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                      )}
                </Col>
            </Row>
        </div>
    )
}

export default Shop;
