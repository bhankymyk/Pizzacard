import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation () {
  return (
      <>
      <Navbar className="topbar" sticky="top">
      <Navbar.Brand className='brand' href="#home">PizzaHut</Navbar.Brand>
      <Nav className="me-auto justify-content-around">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Services</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
{/* <div>Navbar is at the top </div> */}
      </>
    
  )
}

export default Navigation;