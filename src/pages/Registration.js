import React from "react";
import PageTitle from "./common/PageTitle";
import Joi from "joi-browser";
import Form from "./common/Form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import { withRouter } from "react-router";
import userService from "../services/userService"
import { Redirect } from "react-router-dom";

class Registration extends Form {
  state = {
    // data: { email: "", password: "", name: "" },
    data: { email: "", password: "", username: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    // name: Joi.string()
    username: Joi.string().required().min(2).label("Name"),
    biz: Joi.boolean().valid(false),
  };

  doSubmit = async () => {
    const { data } = this.state;
    data.biz = false;
    console.log(data);
    try {
      // const URL = `${apiUrl}/users`
      // await http.post('http://localhost:3900/api/users', data);
      const URL = `${apiUrl}/users/create`;
      await http.post(URL, data);
      toast.success("A new acoount is opened", { position: "top-center" });
      this.setState({ errors: {} });
      this.props.history.replace("/signin");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Error - Email is taken or not valid", {
          position: "top-center",
        });
        console.log(ex.response.request.responseText);
        this.setState({ errors: { email: "Email is taken or not valid" } });
      } else toast("Error");
    }
    // setTimeout(() => {
    //   this.props.history.replace("/home");
    // }, 2000);
  };
  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="container">
        <PageTitle titleText="Signup" />
        <div className="col-12">
          <p>You can open new account for free!</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email", "focused")}
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
