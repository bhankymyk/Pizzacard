import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row} from 'react-bootstrap';
import  PizzaCard  from './Component/PizzaCard';
import Navigation from './Component/Navigation';

function App() {
  const pizzaArr = [
    {
        "id": 1 ,
        "name": "Chicago Pizza",
        "image": "/chicago.jpg",
        "description": "Chicago pizza, also commonly referred to as deep-dish pizza, gets its name from the city it was invented in. During the early 1900’s, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved. Instead of imitating the notoriously thin pie, Ike Sewell had something else in mind. He created a pizza with a thick crust that had raised edges, similar to a pie, and ingredients in reverse, with slices of mozzarella lining the dough followed by meat, vegetables, and then topped with a can of crushed tomatoes. This original creation led Sewell to create the now famous chain restaurant, Pizzeria Uno.",
        "price": 9
    },
    {
        "id": 2 ,
        "name": "Greek Pizza",
        "image": "/greek.jpeg",
        "description": "Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom. While this style has a crust that is puffier and chewier than thin crust pizzas, it’s not quite as thick as a deep-dish or Sicilian crust.",
        "price": 15
    },
    {
        "id": 3 ,
        "name": "New York Pizza",
        "image": "/newyork.jpeg",
        "description": "With its characteristic large, foldable slices and crispy outer crust, New York-style pizza is one of America’s most famous regional pizza types. Originally a variation of Neapolitan-style pizza, the New York slice has taken on a fame all its own, with some saying its unique flavor has to do with the minerals present in New York’s tap water supply.",
        "price": 25
    },
    {
        "id": 4 ,
        "name": "California Pizza",
        "image": "/california.jpeg",
        "description": "California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in the late 1970’s when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant, Prego. He created a pizza with mustard, ricotta, pate, and red pepper, and by chance, served it to Wolfgang Puck. Impressed with LaDou’s innovative pie, Puck invited him to be a head pizza chef at his restaurant. It was here that LaDou came up with over 250 unique pizza recipes that eventually formed the menu of the chain restaurant California Pizza Kitchen.",
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
    <Container>
      <Row>
        <Navigation/>
      {PizzaCards}
      </Row>
    </Container>
    </>
  );
}

export default App;
