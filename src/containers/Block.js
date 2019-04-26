import React, { Component } from "react";
import "./Block.css";
import { } from 'react-bootstrap';

export default class Mission extends Component {  
  constructor(props) {
    super(props);
    this.state = {}    
  }

  render() {
   
    return (
      <div className="wrapper">
        <img className="image" src={this.props.imageSrc} alt={this.props.imageAlt}/>
        <p className="centerText"> {this.props.text} </p>
      </div>
    );
  }
}