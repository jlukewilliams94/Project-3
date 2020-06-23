// import React from 'react';
// import Navbar from '../../components/Navbar';
// import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
// import './style.css'

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



//     function Shop(props) {
//         // Setting our component's initial state
//         const [cards, setCards] = useState([])
//         const [formObject, setFormObject] = useState({})
      
//         // Load all books and store them with setBooks
//         useEffect(() => {
//           loadCards()
//         }, [])
      
//         // Loads all books and sets them to books
//         function loadCards() {
//           API.getCards()
//             .then(res => 
//               setCards(res.data)
//             )
//             .catch(err => console.log(err));
//         };

//     return (
//         <div>
//             <Navbar />
//             <h1>Shop</h1>
//             <Row>
//                 <Col
//                     m={6}
//                     s={12}
//                 >
//                     <Card className="beercard"
//                         actions={[
//                             <a key="1" href="/cart">Add to cart</a>
//                         ]}
//                         header={<CardTitle href={props.website} image={props.logo}>{props.name}</CardTitle>}
//                         revealIcon={<Icon>more_vert</Icon>}
//                     >
//                         Beer: {props.beer.name} <br></br>
//                         Price: {props.beer.price}<br></br>
//                         Description: {props.beer.description}<br></br>
//                         Type: {props.beer.type} <br></br>
//                         Alcohol Content: {props.beer.alcoholContent}<br></br>
//                         User Reviews: {props.beer.userReviews} <br></br>
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

// export default Shop;
