import React from "react";
import PageTitle from "../pages/common/PageTitle";
import Joi from "joi-browser";
import Form from "../pages/common/Form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import { withRouter } from "react-router";
import userService from "../services/userService"

class EditUser extends Form {
  
  state = {
    // data: { email: "", password: "", name: "" },
    data: { email: "", password: "", username: "", biz:false, id:'', cards:[]  },   
    errors: {},
  }

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    // name: Joi.string()
    username: Joi.string().required().min(2).label("Name"),
    biz: Joi.boolean(),
    id:Joi.string(),
    cards:Joi.array()
  };

  async componentDidMount() {    
    const {email, username, biz, _id, cards} = await userService.getDataUser()    
    this.setState({data: {email: email, password: this.state.password , username: username, biz:biz, id:_id, cards:cards } } )
  }

  doSubmit = async () => {
    const { data } = this.state;    
    try {
      // const URL = `${apiUrl}/users`
      // await http.post('http://localhost:3900/api/users', data);
      const userId = data.id;
      delete data.id
      const URL = `${apiUrl}/users/${userId}`;
      await http.put(URL, data);
      toast.success("A new acoount is opened", { position: "top-center" });
      this.setState({ errors: {} });
      this.props.history.replace("/my-cards");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Error - Email is taken or not valid", {
          position: "top-center",
        });
        this.setState({ errors: { email: "Email is taken or not valid" } });
      } else toast("Error");
    }
  };

  handleCancel = () => {
    this.props.history.push("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageTitle titleText="Signup" />
        <div className="col-12">
          <p>You can edit your profile</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="PUT">
              {this.renderInput("email", "Email", "email", "focused")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("username", "Name")}
              {/* {this.renderInput("name", "Name")} */}
              {this.renderButton("Signup")}
              <button
                className="btn btn-secondary ml-2"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditUser);