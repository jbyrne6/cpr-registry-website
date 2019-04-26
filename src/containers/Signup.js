import React, { Component } from "react";
import "./Signup.css";
import { Form, Button, Row, Col } from 'react-bootstrap';
import Axios from "axios";

export default class Signup extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      validateEmail:'',
      phone:'',
      zip:'',
      firstNameError:'',
      lastNameError:'',
      emailError:'',
      validateEmailError:'',
      phoneError:'',
      zipError:''
    }
    let initialState = this.state;
  }

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleValidateEmailChange = (event) => {
    this.setState({validateEmail: event.target.value});
  }

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  }

  handleZipChange = (event) => {
    this.setState({zip: event.target.value});
  }

  validateFirstName = () => {
    const { firstName } = this.state;
    this.setState({
      firstNameError:
        firstName.length > 0 ? null : 'First name must not be empty'
    });
  }

  validateLastName = () => {
    const { lastName } = this.state;
    this.setState({
      lastNameError:
        lastName.length > 0 ? null : 'Last name must not be empty'
    });
  }
  
  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 0 ? null : 'Email must not be empty'
    });
  }

  validateValidateEmail = () => {
    const { validateEmail, email } = this.state;
    this.setState({
      validateEmailError:
        (validateEmail.length > 0 && validateEmail == email) ? null : 'Validate email must not be empty'
    });
  }

  validatePhone = () => {
    const { phone } = this.state;
    this.setState({
      phoneError:
        phone.length > 0 ? null : 'First name must not be empty'
    });
  }

  validateZip = () => {
    const { zip } = this.state;
    this.setState({
      zipError:
        zip.length > 0 ? null : 'First name must not be empty'
    });
  }

  invalidSubmission = () => {

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, validateEmail, phone, zip } = this.state
    let phoneClean = phone.match(/\d+/g).map(Number).join('')
    const data = {firstName: firstName, lastName: lastName, email: email, phone: phone, phoneClean: phoneClean, zip: zip}
    Axios.post('http://localhost:5000/serverport/add', data);
    // reset the state to empty
    this.setState(this.initialState);
    alert(`Your state values: \n 
            firstName: ${firstName} \n 
            lastName: ${lastName} \n 
            email: ${email} \n 
            validateEmail: ${validateEmail} \n 
            phone: ${phone} \n 
            phoneClean: ${phoneClean} \n
            zip: ${zip}`)
  } 

  render() {
    const isValidFirstName = this.state.firstName.length > 0
    const isValidLastName = this.state.lastName.length > 0
    const isValidEmail = this.state.email.length > 0
    const isValidValidateEmail = this.state.email.length > 0 && this.state.email == this.state.validateEmail
    const isValidPhone = this.state.phone.length > 0
    const isValidZip = this.state.zip.length > 0
    return (
      <Form onSubmit={this.handleSubmit}>
        <p className="title">
          Register for the CPR Registry
        </p>
        {/* <div className = "input-group"> */}
        <div className = "middle-column">
          <Row>
            <Col>
              <Form.Group controlID="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="firstName" 
                  placeholder="First Name"  
                  value={this.state.firstName} 
                  onChange={this.handleFirstNameChange}
                  className={`form-control ${ isValidFirstName? '':'is-valid' }`}
                  onBlur={this.validateFirstName} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlID="formBasiclastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="lastName" 
                  placeholder="Last Name"  
                  value={this.state.lastName} 
                  onChange={this.handleLastNameChange}
                  className={`form-control ${ isValidLastName? '':'is-invalid' }`}
                  onBlur={this.validateLastName} />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div className = "middle-column">
          <Form.Group  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              className = {[`form-control ${ isValidEmail? '':'is-invalid' }`, 'input-group'].join(' ')} 
              // className = 'input-group'
              type="email" 
              placeholder="Enter email"  
              value={this.state.email} 
              onChange={this.handleEmailChange}
              onBlur={this.validateEmailName} />
          </Form.Group>

          <Form.Group  controlId="formBasicEmailConfirm">
            <Form.Label>Confirm email address</Form.Label>
            <Form.Control 
              className = {[`form-control ${ isValidValidateEmail? '':'is-invalid' }`, 'input-group'].join(' ')} 
              // className = 'input-group'
              type="email" placeholder="Enter email"  
              value={this.state.validateEmail} 
              onChange={this.handleValidateEmailChange}
              onBlur={this.validateValidateEmailName} />
          </Form.Group>
        </div>
        {/* <div className = "input-group"> */}
        <div className = "middle-column">
          <Row>
            <Col>
              <Form.Group controlId="formBasicPhoneNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                  type="phoneNumber" 
                  placeholder="Phone Number"  
                  value={this.state.phone} 
                  onChange={this.handlePhoneChange}
                  className={`form-control ${ isValidPhone? '':'is-invalid' }`}
                  onBlur={this.validatePhone} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicZipCode">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                  type="zipCode" 
                  placeholder="Zip Code"  
                  value={this.state.zip} 
                  onChange={this.handleZipChange}
                  className={`form-control ${ isValidZip? '':'is-invalid' }`}
                  onBlur={this.validateZip} />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div className = "middle-column">
          <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

