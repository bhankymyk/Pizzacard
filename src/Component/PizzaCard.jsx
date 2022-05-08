import React from "react";
import { Card, Badge, Button} from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PizzaCard = (props) => {
        const notify = () => toast.success("Your pizza will be ready in 5 minutes time");
    
    return (
<div className="mr-3 col-sm-6 col-md-3">
    <Card className="pizza shadow-sm bg-light rounded mb-3">
        <Card.Img src={props.image}/>
        <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
                <Card.Title className="mb-0 font-weight-bold"> {props.name} </Card.Title>
                <Badge>${props.price} </Badge>
            </div>
            <Card.Text className="text-secondary justify-content">{props.description}</Card.Text>
            <Button  onClick={notify} className="btn btn-success btn-block">Order Pizza</Button>
            <ToastContainer position="top-center" hideProgressBar={true}/>
        </Card.Body>
    </Card>
</div>
    )
}

export default PizzaCard;
