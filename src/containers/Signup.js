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
      phoneClean:'',
      zip:'',
      firstNameNullError: true,
      lastNameNullError: true,
      emailNullError: true,
      confirmationemailNullError: true,
      validateemailNullError: true,
      emailRepeatedInDBError: false,
      phoneNullError: true,
      noNumberPhoneError: false,
      zipNullError: true,
    }
    this.baseState = this.state;
  }

  resetState = () => {
    this.setState(this.baseState)
  }

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value, firstNameNullError: event.target.value === ''});
  }

  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value, lastNameNullError: event.target.value === ''});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value, emailNullError: event.target.value === ''});
  }

  handleValidateEmailChange = (event) => {
    this.setState({validateEmail: event.target.value, confirmationemailNullError: event.target.value === ''});
  }

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value, phoneNullError: event.target.value === ''});
  }

  handleZipChange = (event) => {
    this.setState({zip: event.target.value, zipNullError: event.target.value === ''});
  }

  cleanUpPhone = (phoneNumber) => {
    let phoneClean = phoneNumber !== '' ? phoneNumber.match(/\d+/g).map(Number).join('') : ''
    return phoneClean
  }

  postParticipantData = async (data) => {
    return Axios.post('http://localhost:5000/serverport/add', data);
  }

  getDatabaseResponse = async () => {
    return Axios.get('http://localhost:5000/serverport/dbResponse');
  }

  // validateFirstName = () => {
  //   const { firstName } = this.state;
  //   this.setState({
  //     firstNameNullError:
  //       firstName.length > 0 ? null : 'First name must not be empty'
  //   });
  // }

  // validateLastName = () => {
  //   this.setState({lastNameNullError: this.lastName === ''});
  //   // if (this.state.lastNameNullError) {
  //   //   alert('Last name can\'t be empty')
  //   // }
  // }
  
  // validateEmail = () => {
  //   const { email } = this.state;
  //   this.setState({
  //     emailNullError:
  //       email.length > 0 ? null : 'Email must not be empty'
  //   });
  // }

  // validateValidateEmail = () => {
  //   const { validateEmail, email } = this.state;
  //   this.setState({
  //     validateemailNullError:
  //       (validateEmail.length > 0 && validateEmail == email) ? null : 'Validate email must not be empty'
  //   });
  // }

  // validatePhone = () => {
  //   const { phone } = this.state;
  //   this.setState({
  //     phoneNullError:
  //       phone.length > 0 ? null : 'First name must not be empty'
  //   });
  // }

  // validateZip = () => {
  //   const { zip } = this.state;
  //   this.setState({
  //     zipNullError:
  //       zip.length > 0 ? null : 'First name must not be empty'
  //   });
  // }

  // invalidSubmission = () => {

  // }

  handleSubmit = (event) => {
    event.preventDefault();
    let realCleanPhone = this.cleanUpPhone(this.state.phone)
    if (/\d/.test(this.state.phone)) {
      if (realCleanPhone === '') {
        realCleanPhone = this.state.phone
      }
      this.setState({phoneClean: realCleanPhone})
    } else {
      this.setState({noNumberPhoneError: true})
    }
    // alert("state: " + realCleanPhone)
    const { firstName, lastName, email, validateEmail, phone, zip, firstNameNullError, lastNameNullError, emailNullError, confirmationemailNullError, validateemailNullError, phoneNullError, noNumberPhoneError, zipNullError } = this.state
    const data = {firstName: firstName, lastName: lastName, email: email, phone: phone, phoneClean: realCleanPhone, zip: zip}

    // Axios.all([this.postParticipantData(data), this.getDatabaseResponse()])
    //   .then(Axios.spread(function (acct, perms) {
    //     console.log(acct)
    //     console.log(perms)
    //   }));
    Axios.post('http://localhost:5000/serverport/add', data).then(
      Axios.get('http://localhost:5000/serverport/dbResponse')
      .then(response => {
        console.log(response.data);
        // alert(response.data);
      }));

    // dbPost.then(result => {
    //   console.log('result = ', result)
    // }).catch(err => {
    //   console.log('CATCH = ', err)
    // });
    // reset the state to empty
    // this.setState(this.resetState);
    // this.setState({lastName: '', lastNameNullError: true})
    // if (this.lastName === '') {
    //   alert ('last name cant be empty')
    // }
    // alert(`Your state values: \n 
    //   firstName: ${firstName} \n 
    //   lastName: ${lastName} \n 
    //   email: ${email} \n 
    //   validateEmail: ${validateEmail} \n 
    //   phone: ${phone} \n 
    //   phoneClean: ${data.phoneClean} \n
    //   zip: ${zip} \n
    // `)
    
    // alert(`      
    //   firstNameNullError: ${firstNameNullError} \n
    //   lastNameNullError: ${lastNameNullError} \n
    //   emailNullError: ${emailNullError} \n
    //   confirmationemailNullError: ${confirmationemailNullError} \n
    //   validateemailNullError: ${validateemailNullError} \n
    //   emailRepeatedInDBError: ${this.state.confirmationemailNullError} \n
    //   phoneNullError: ${phoneNullError} \n
    //   noNumberPhoneError: ${noNumberPhoneError} \n
    //   zipNullError: ${zipNullError}
    // `)
  } 

  render() {
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
                  // className={`form-control ${ !this.state.firstNameNullError ? '':'is-invalid' }`}
                  // onBlur={this.validateFirstName} 
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlID="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="lastName" 
                  placeholder="Last Name"  
                  value={this.state.lastName} 
                  onChange={this.handleLastNameChange}
                  // className={`form-control ${ !this.state.lastNameNullError ? '':'is-invalid' }`}
                  // onBlur={this.validateLastName} 
                  />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div className = "middle-column">
          <Form.Group  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              // className = {[`form-control ${ !this.state.emailNullError ? '':'is-invalid' }`, 'input-group'].join(' ')} 
              className = 'input-group'
              type="email" 
              placeholder="Enter email"  
              value={this.state.email} 
              onChange={this.handleEmailChange}
              // onBlur={this.validateEmailName} 
              />
          </Form.Group>

          <Form.Group  controlId="formBasicEmailConfirm">
            <Form.Label>Confirm email address</Form.Label>
            <Form.Control 
              // className = {[`form-control ${ !this.state.confirmationemailNullError ? '':'is-invalid' }`, 'input-group'].join(' ')} 
              className = 'input-group'
              type="email" placeholder="Enter email"  
              value={this.state.validateEmail} 
              onChange={this.handleValidateEmailChange}
              // onBlur={this.validateValidateEmailName} 
              />
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
                  // className={`form-control ${ !this.state.phoneNullError ? '':'is-invalid' }`}
                  // onBlur={this.validatePhone} 
                  />
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
                  // className={`form-control ${ !this.state.zipNullError ? '':'is-invalid' }`}
                  // onBlur={this.validateZip} 
                  />
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

