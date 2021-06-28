import React from "react";
import PageTitle from "./common/PageTitle";
import Joi from "joi-browser";
import Form from "./common/Form";
import http from '../services/httpService'
import {apiUrl} from "../config.json"
import { toast } from "react-toastify";
import {withRouter} from 'react-router'


class Registration extends Form {
  constructor(props) {
    super(props)
  }
  state = {
    // data: { email: "", password: "", name: "" },
    data: { email: "", password: "", username: "" },
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
    // name: Joi.string()
    username: Joi.string()
      .required()
      .min(2)
      .label("Name")
  };
 
  doSubmit = async () => {
    
    const { data } = this.state;
    data.biz = false;
    console.log(data);
    try {      
      // const URL = `${apiUrl}/users`
      const URL = `${apiUrl}/users/create`
      console.log(URL);
      await http.post(URL, data);
      toast("A new acoount is opened");
      // await http.post('http://localhost:3900/api/users', data);
      this.props.history.replace("/home");     
    } catch (ex) {      
      if (ex.response && ex.response.status === 400) {
        toast("Error - Email is taken");
        console.log(ex);
        this.setState({ errors: { email: "Email is taken" } });
      } else toast("Error");
    }
    // setTimeout(() => {
    //   this.props.history.replace("/home");           
    // }, 2000);
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
              {this.renderInput("username", "Name")}
              {/* {this.renderInput("name", "Name")} */}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Registration);
