import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import PageTitle from "./common/PageTitle";
import userService from "../services/userService"
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/my-cards";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
        toast.error(`Token not valid - ${ex.response.data}`, {position: "top-center"});
      }
    }  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container">
        <PageTitle titleText="Signin" />
        <div className="col-12">
          <p>You can signin here with your account!</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email", "focused")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Signin")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
