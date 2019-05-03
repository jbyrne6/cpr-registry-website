import React, { Component } from "react";
import "./Contact.css";
import { } from 'react-bootstrap';

export default class Contact extends Component {  
  constructor(props) {
    super(props);
    this.state = {}    
  }

  render() {
   
    return (
      <div className="footer">
        <p id="title"><u>{this.props.title}</u></p>
        <p id="email">{this.props.email}</p>
        <p id="address">{this.props.address}</p>
      </div>
    );
  }
}