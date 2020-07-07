import React, { useEffect, useState } from 'react';
import { Row } from 'react-materialize';
import './style.css'
import API from '../../lib/API'
import AdminCard from '../../components/AdminCard'


function AdminSite() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        loadCards()
    }, [])


    function loadCards() {
        API.getCards()
            .then(res =>{
                const beersArr = res.data.map(async (brewery) => {
                    await API.getBeers(brewery.id)
                    .then(beers => {
                        brewery.beers = beers.data
                    })
                    console.log(brewery)
                    return brewery;
                    
                })
                Promise.all(beersArr).then((alldata) => {
                    setCards(alldata);
                })
            }
            )
            .catch(err => console.log(err));
    };
    
    return (
        <div className='container'>
            <h1 className="shopping"></h1>
            {(cards.length>0) ? (
                cards.map(brewery => {
                    return (
                        <Row key={brewery.id}>
                            <Row className='nameRow'
                            >
                                <h3 className="icon"><img src={brewery.logo} alt={brewery.name}/> &nbsp;
                                {brewery.name}</h3>
                                
                            </Row>
                            <Row key={brewery.id + "_row"}>
                                {brewery.beers.map(beer => (

                                    <AdminCard key={beer._id} beerInfo={beer} />
                                ))
                                }
                            </Row>
                        </Row>
                    );
                })) : (
                        <p className="wait">please wait while we fetch your stock...</p>
                )}
        </div >
    )
}

export default AdminSite;
