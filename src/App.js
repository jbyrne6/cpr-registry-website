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
            text="More than 350,000 cardiac arrests occur outside of the hospital each year.  In 2015, any-mention sudden cardiac arrest mortality in the US was 366,807. 
            CPR, especially if administered immediately after cardiac arrest, can double or triple a person’s chance of survival. About 90 percent of people who experience 
            an out-of-hospital cardiac arrest die. According to 2014 data, nearly 45 percent of out-of-hospital cardiac arrest victims survived when bystander CPR was administered. - cpr.heart.org" 
            imageSrc="https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg" 
            alt="Hospital"
           />
        </div>
        <div id="" className="putBlockInMiddle">
          <Block 
            imageSrc="http://media.navigatored.com/images/940*630/shutterstock_657810997.jpg" 
            text="Survivor Story"
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
