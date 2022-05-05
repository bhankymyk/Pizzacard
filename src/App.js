// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap';
// import  Confirmation from "./Component/Confirmation";
import  PizzaCard  from './Component/PizzaCard';
// import Pizza from './data'

function App() {
  const pizzaArr = [
    {
        "id": 1 ,
        "name": "Chicago Pizza",
        "image": "/Pizza.jpg",
        "description": "The pan in which is baked gives its characteristically high edge which provides ample space for large amount of cheese and a chunky tomato sauce.",
        "price": 9
    },
    {
        "id": 2 ,
        "name": "Orlando Pizza",
        "image": "/Pizza.jpg",
        "description": "The pan in which is baked gives its characteristically high edge which provides ample space for large amount of cheese and a chunky tomato sauce.",
        "price": 15
    },
    {
        "id": 3 ,
        "name": "New Jersey Pizza",
        "image": "/Pizza.jpg",
        "description": "The pan in which is baked gives its characteristically high edge which provides ample space for large amount of cheese and a chunky tomato sauce.",
        "price": 25
    },
    {
        "id": 4 ,
        "name": "Alabama Pizza",
        "image": "/Pizza.jpg",
        "description": "The pan in which is baked gives its characteristically high edge which provides ample space for large amount of cheese and a chunky tomato sauce.",
        "price": 30
    }
]

const PizzaCards = pizzaArr.map((item, pos) => {
  return (
<PizzaCard key = {pos} name={item.name} image={item.image} description={item.description} price={item.price}/>
  )
},)

  return (
    <>
    {/* <Confirmation/> */}
    <Container>
      <Row>
      <Col xs={3}>{PizzaCards}</Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
