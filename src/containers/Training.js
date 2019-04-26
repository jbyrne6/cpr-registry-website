import React, { Component } from "react";
import "./Training.css";
import { } from 'react-bootstrap';

export default class Training extends Component {  
  constructor(props) {
    super(props);
    this.state = {}    
  }

  render() {
   
    return (
      <div className="buttonWrapper">
        <a 
            href="https://www.youtube.com/watch?v=CuUXdQI5LLs" 
            rel="noopener noreferrer" target="_blank"
            className="buttonText"
        >Click here to refresh your CPR knowledge</a>
      </div>
    );
  }
}

