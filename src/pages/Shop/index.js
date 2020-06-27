import React, { useEffect, useState } from 'react';
import { Row } from 'react-materialize';
import './style.css'
import API from '../../lib/API'
import BeerCard from '../../components/BeerCard/index'


function Shop() {
    const brewerySeed = [{
        name: "NoDa Brewing Company",
        logo: "https://d2sochvv0rudri.cloudfront.net/place_photos/4526/noda-brewing-company.png",
        location: "Noda, Charlotte",
        website: "http://nodabrewing.com",
        description: "Whether it’s a small-batch brew or one of our full-production, year-round beers, NoDa Brewing Company crafts “the beer on everyone’s lips” with the highest standards and an extreme attention to detail. We strive to brew an extensive variety with consistent quality so that every beer drinker’s palate gets a dependable, delicious beer.",
        id:1,
        beers: [
            {
                name: "Hop Drop 'N' Roll",
                picture: "https://nodabrewing.com/wp-content/uploads/2019/10/HopDrop2.png",
                price: 14.99,
                description: "2014 World Beer Cup® Gold Award Winner, American-Style IPA. Hops in your face. Crisp, mouthwatering, American citrus hops dominate for an ideal IPA character.",
                type: "IPA",
                alcoholContent: "7.2%",
                quantity: "100",
                id: 10010

            }]
    }];

    const [cards, setCards] = useState(brewerySeed)
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
            <h1>Shop</h1>
            {cards.length ? (
                cards.map(brewery => {
                    return (
                        <Row key={brewery.id}>
                            <Row className='nameRow'
                            >
                                <h3 className="icon"><img src={brewery.logo} alt={brewery.name}/>
                                {brewery.name}</h3>
                                
                            </Row>
                            <Row>
                                {brewery.beers.map(beer => (
                                    <BeerCard key={beer.id} beerInfo={beer} />
                                ))}
                            </Row>
                        </Row>
                    );
                })) : (
                        <h3>No Results to Display</h3>
                )}
        </div >
    )
}

export default Shop;
