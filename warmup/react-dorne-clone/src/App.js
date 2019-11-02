import React, { Component } from "react";
import Navi from "./Navi";
import {
  Jumbotron,
  Image,
  Form,
  Col,
  Button,
  Container,
  Row,
  Tabs,
  Tab
} from "react-bootstrap";
import "./index.css";
import Cardi from "./Cardi";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Jumbotron className="jumbo">
          <Form className='formo'>
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title="Home"></Tab>
              <Tab eventKey="profile" title="Profile"></Tab>
            </Tabs>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
              <Button  type="submit" className="btn" style={{ background:' #7443EA' , margin:'30px', border:'1px solid black'}}>
                Submit
              </Button>
              </Form.Group>
            </Form.Row>
          </Form>
          <Container>
            <Row>
              <Cardi />
              <Cardi />
              <Cardi />
              <Cardi />
              <Cardi />
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron className='jumba'>
  <h1>DISCOVER YOUR CITY WITH</h1>
  <span>DORNE</span>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe natus aliquid voluptas quae ipsa assumenda consequuntur a numquam unde qui ipsum at quidem dolore rerum corrupti excepturi animi, error rem.
  </p>
</Jumbotron>
      </div>
    );
  }
}
