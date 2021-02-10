/** @format */

import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../../components/form/form";
class LoginForm extends Form {
  username = React.createRef();
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
