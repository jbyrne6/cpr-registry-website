import React, { Component } from "react";
import "./Header.css";
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {  
  constructor(props) {
    super(props);
    this.state = {}    
  }

  render() {
   
    return (
        // <Navbar bg="dark" variant="dark">
        //     <Navbar.Brand href="#home">
        //     <img
        //         alt=""
        //         src= {require("../assets/logo_icon.png")}
        //         width="30"
        //         height="30"
        //         className="d-inline-block align-top"
        //     />
        //     {' CPR Registry'}
        //     </Navbar.Brand>
        //     <Nav.Link href="#mission">Mission</Nav.Link>
        //     <Nav.Link href="#user-stories">User Stories</Nav.Link>
        //     {/* <Nav.Link href="#faq">FAQ</Nav.Link> */}
        // </Navbar>
        <ul className="headerPosition">
          <li><a href="home"><img className="siteLogo" href="#home" src= {require("../assets/logo_icon.png")} alt="Site Logo" /></a></li>
          <li><a class="active" href="#registration">Register</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    );
  }
}

// className="siteLogo"