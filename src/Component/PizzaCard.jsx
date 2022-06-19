import React from "react";
import { Card, Badge, Button} from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PizzaCard = (props) => {
        const notify = () => toast.success("Your pizza will be ready in 5 minutes time");
    
    return (
<div className="col-sm-6 col-md-3 mt-2">
    <Card className="pizza shadow-sm bg-light rounded">
        <Card.Img src={props.image}/>
        <Card.Body className="d-flex flex-column">
            <div className="d-flex justify-content-between">
                <Card.Title className="font-weight-bold"> {props.name} </Card.Title>
                <Badge>${props.price} </Badge>
            </div>
            <Card.Text className="description">{props.description}</Card.Text>
            <Button  onClick={notify} className="btn btn-success btn-block">Order Pizza</Button>
            <ToastContainer position="top-center" hideProgressBar={true}/>
        </Card.Body>
    </Card>
</div>
    )
}

export default PizzaCard;
