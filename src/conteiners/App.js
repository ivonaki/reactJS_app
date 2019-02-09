import React, { Component } from 'react';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'reactstrap';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import '../index.css';
import '../App.css';



const particleOptions= {  
      particles: {
        number: {
          value: 80, 
          density: {
            enable: true,
            value_area: 1000
          }
        }
      }
    }


 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.prevetDefault();
    console.log('dodali smo username:' + this.state.username.value); //test  
  }
  
  render() {
    return (
      
      <div className="container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> {/*staviti u css?*/}
          <Particles className='particles'
            params={particleOptions} 
            />
        <div className="columns">
          <div className="col-md-12 centered" id='bc-form' style={{height: '600px', width: '350px'}}>
            <h3 className="tl pa3 white">Registration</h3>
            
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className= 'white' htmlFor="username">Username</Label>
                  <Input 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder="Type your username"
                  value={this.state.username}
                  onChange = {e => this.handleChange(e)}  />
                </FormGroup>
                <FormGroup>
                  <Label className= 'white' htmlFor="email">Email</Label>
                  <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange = {e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className= 'white' htmlFor="password"> Password </Label>
                  <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange = {e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className= 'white' htmlFor="password"> Confirm Password </Label>
                  <Input 
                  type="password" 
                  name="confirmPassword" 
                  id="password1" 
                  placeholder="Confirm your password"
                  value={this.state.confirmPassword}
                  onChange = {e => this.handleChange(e)}
                  />
                </FormGroup>
                <Button type="submit" 
                  name="submit" 
                  id="button" 
                  >Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
