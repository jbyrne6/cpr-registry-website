import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./containers/Signup.js";
import Header from "./containers/Header.js";
import Logo from "./containers/Logo.js";
import Training from "./containers/Training.js"
import Block from "./containers/Block.js"
import Contact from "./containers/Contact.js"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <div className="center">
          <Logo />
        </div> */}
        <div id="registration">
          <Signup />
        </div>
        <div className="putButtonInMiddle">
          <Training />
        </div>
        <div id="about" className="putBlockInMiddle">
          <Block
            text="Lorem ipsum malesuada congue eu euismod sollicitudin orci purus turpis per cubilia dictumst sodales quis porttitor ac convallis habitant quis sit laoreet.

            Vulputate nisl per sociosqu placerat id aptent purus, eget ullamcorper  feugiat ut nibh lacus pulvinar, rhoncus cubilia tempor ligula accumsan duis aenean justo tortor imperdiet nunc velit tempor." 
            imageSrc="https://brockportchamber.org/wp-content/uploads/2017/09/happy-family.jpg" 
            alt="Happy Family"
           />
        </div>
        <div id="" className="putBlockInMiddle">
          <Block 
            imageSrc="http://media.navigatored.com/images/940*630/shutterstock_657810997.jpg" 
            text="User case 1"
          />
        </div>
        <div id="contact">
          <Contact 
            title="How to Contact Us"
            email="jbyrne6@lion.lmu.edu"
            address="1 Loyola Marymount University Dr, Los Angeles, CA 90045"
          />
        </div>
      </div>
    );
  }
}

export default App;
