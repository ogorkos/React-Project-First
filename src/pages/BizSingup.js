import React from "react";
import Joi from "joi-browser";
import {apiUrl} from '../config.json'
import http from '../services/httpService'
import {toast} from "react-toastify"
import userService from '../services/userService'
import {Redirect} from 'react-router-dom'
import PageTitle from "./common/PageTitle";
import Form from './common/Form'

class BizSingup extends Form {
  state = {
    data: { email: "", password: "", username: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    username: Joi.string().required().label("Name"),
    biz: Joi.boolean(),
  };
  doSubmit = async() => {
     const {data} = this.state;
     data.biz = true;

     try {
         const URL = `${apiUrl}/users/create`;         
         console.log(data);
         const {email, password} = data
         await http.post(URL, data);
         await userService.login(email, password);

         toast.success("A new acoount is opened", { position: "top-center" });
         window.location = '/create-card'
     } catch (e) {
         if (e.response &&e.response.status === 400){
            toast.error(`Error - ${e}`)
            this.setState({errors:{email:'Email is taken'}})
         }
     }
  }
  render() {
     if (userService.getCurrentUser()) return <Redirect to="/" />;

     return(
      <div className="container">
      <PageTitle titleText="Business Registration Form" />
      <div className="col-12">
        <p>Open business account for free!</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
            {this.renderInput("email", "Email", "email", "focused")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("username", "Name")}
            {/* {this.renderInput("name", "Name")} */}
            {this.renderButton("Next")}
          </form>
        </div>
      </div>
    </div>
     )
  }
}

export default BizSingup