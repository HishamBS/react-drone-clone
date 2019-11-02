import React, { Component } from "react";
import { Card } from "react-bootstrap";
import './index.css'
export default class Cardi extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "12rem" , background:' #7443EA' }} className='cardo'>
          <Card.Body>
            <Card.Title>ICON</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
