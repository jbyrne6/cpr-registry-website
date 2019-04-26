import React, { Component } from "react";
import "./Logo.css";
import { Image } from 'react-bootstrap';

export default class Header extends Component {  
  constructor(props) {
    super(props);
    this.state = {}    
  }

  render() {
   
    return (
        <Image className = "logo" src= {require("../assets/logo.png")} />
    );
  }
}

