import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Card, Badge, Button} from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PizzaCard = (props) => {
        const notify = () => toast.success("Pizza not currently available");
    
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
            <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
            <Button  onClick={notify} className="btn btn-success btn-block">Order Pizza</Button> 
            </AnimationOnScroll>
            <ToastContainer position="top-center" hideProgressBar={true}/>
        </Card.Body>
    </Card>
</div>
    )
}

export default PizzaCard;
