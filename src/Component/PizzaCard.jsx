import React from "react";
import { Card, Badge, Button} from 'react-bootstrap';

const PizzaCard = (props) => {
    return (
<Card className="pizza shadow-sm bg-light rounded">
<Card.Img src={props.image}/>
<Card.Body className="d-flex flex-column">
    <div className="d-flex mb-2 justify-content-between">
        <Card.Title className="mb-0 font-weight-bold"> {props.name} </Card.Title>
<Badge>${props.price} </Badge>    
    </div>
    <Card.Text className="text-secondary">{props.description}</Card.Text>
    <Button className="btn btn-success btn-block">Order Pizza</Button>
</Card.Body>
</Card>
    )
}

export default PizzaCard;