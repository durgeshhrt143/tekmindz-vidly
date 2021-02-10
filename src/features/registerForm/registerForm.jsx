/** @format */

import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../../components/form/form";
class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name:""
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name:Joi.string().required().label('Name')
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
