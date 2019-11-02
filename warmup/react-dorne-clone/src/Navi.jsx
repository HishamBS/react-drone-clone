import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Container
} from "react-bootstrap";
import "./index.css";
export default class Navi extends Component {
  render() {
    return (
      <div>
        
          <Navbar fixed='top' bg="dark" variant="dark">
            <Navbar.Brand href="#home">D O R N E</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Explore">Explore</Nav.Link>
              <Nav.Link href="#Listing">Listing</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button  style={{ background:' #7443EA' , border:'1px solid black'}}>Search</Button>
            </Form>
          </Navbar>
       
      </div>
    );
  }
}
