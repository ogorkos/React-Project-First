import React from "react";
import PageTitle from "./common/PageTitle";
import Joi from "joi-browser";
import Form from "./common/Form";
import http from '../services/httpService'
import {apiUrl} from "../config.json"

class Registration extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };
 
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    name: Joi.string()
      .required()
      .min(2)
      .label("Name")
  };
 
  doSubmit = async () => {
    const { data } = this.state;
    data.biz = false;
    console.log(data);
    try {
      await http.post(`${apiUrl}/users`, data);
      this.props.history.push("/home");     
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex);
        this.setState({ errors: { email: "Email is taken" } });
      }
    }
  };
  render() {
    return (
      <div className="container">
        <PageTitle titleText="Signup" />

        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Registration;
