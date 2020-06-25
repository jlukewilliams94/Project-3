import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Row, Col, Card, Icon, CardTitle, List } from 'react-materialize';
import './style.css'
import API from '../../lib/API'
import Footer from '../../components/Footer'


function Shop() {
    const brewerySeed = [{
            name: "NoDa Brewing Company",
            logo: "https://d2sochvv0rudri.cloudfront.net/place_photos/4526/noda-brewing-company.png",
            location: "Noda, Charlotte",
            website: "http://nodabrewing.com",
            description: "Whether it’s a small-batch brew or one of our full-production, year-round beers, NoDa Brewing Company crafts “the beer on everyone’s lips” with the highest standards and an extreme attention to detail. We strive to brew an extensive variety with consistent quality so that every beer drinker’s palate gets a dependable, delicious beer.",
            beers: 
                {
                    name: "Hop Drop 'N' Roll",
                    picture: "https://nodabrewing.com/wp-content/uploads/2019/10/HopDrop2.png",
                    price: 14.99,
                    description: "2014 World Beer Cup® Gold Award Winner, American-Style IPA. Hops in your face. Crisp, mouthwatering, American citrus hops dominate for an ideal IPA character. It’s hopped before, during and after the boil with late boil additions of Citra and Amarillo for a complex flavor profile. The rich golden color comes from a blend of English and American base malts accented with substantial amounts of Vienna and Wheat malt. This is the beer that started it all for NoDa Brewing.",
                    type: "IPA",
                    alcoholContent: "7.2%",
                    quantity: "100",
    
                }
        }];

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
                                            header={<CardTitle href={card.brewerySeed.website} image={card.brewerySeed.logo}>{card.brewerySeed.name}</CardTitle>}
                                            revealIcon={<Icon>more_vert</Icon>}
                                        >
                                            Beer: {card.brewerySeed.beer.name} <br></br>
                                            Price: {card.brewerySeed.beer.price}<br></br>
                                            Description: {card.brewerySeed.beer.description}<br></br>
                                            Type: {card.brewerySeed.beer.type} <br></br>
                                            Alcohol Content: {card.brewerySeed.beer.alcoholContent}<br></br>
                                        </Card>
    
                                );
                            })}
                        </List>
                    ) : (
                        <h3>No Results to Display</h3>
                      )}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default Shop;
