import React from "react";
import PageTitle from "../pages/common/PageTitle";
import Joi from "joi-browser";
import Form from "../pages/common/Form";
import cardService from "../services/cardService"
import { toast } from "react-toastify";
import { withRouter } from "react-router";

 
class EditCard extends Form {
  state = {
    data: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: ""
    },
    errors: {}
  };
 
  schema = {
    _id: Joi.string(),
    bizName: Joi.string()
      .min(2)
      .max(255)
      .required(),
    bizDescription: Joi.string()
      .min(2)
      .max(1024)
      .required(),
    bizAddress: Joi.string()
      .min(2)
      .max(400)
      .required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string()
      .min(11)
      .max(1024)
      .uri()
      .allow(""),
    favorite: Joi.boolean()
  };
 
  async componentDidMount() {
    const cardId = this.props.match.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ data: this.mapToViewModel(data) });
  }
 
  mapToViewModel(card) {
    return {
      _id: card._id,
      bizName: card.bizName,
      bizDescription: card.bizDescription,
      bizAddress: card.bizAddress,
      bizPhone: card.bizPhone,
      bizImage: card.bizImage,
      favorite: card.favorite
    };
  }
 
  doSubmit = async () => {
    const { data } = this.state;
    try {
      await cardService.editCard(data);
      toast.success("Card is Updated");
      this.props.history.replace("/my-cards"); 
    } catch (error) {
       console.log(error);
    }    
  };
 
  handleCancel = () => {
    this.props.history.push("/my-cards");
  };
 
  render() {
    return (
      <div className="container">
        <PageTitle titleText="Edit Card" />
        <div className="row">
          <div className="col-12">
            <p>Fill out card details here</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("bizName", "Business Name", "focused")}
              {this.renderInput("bizDescription", "Business Description")}
              {this.renderInput("bizAddress", "Business Address")}
              {this.renderInput("bizPhone", "Business Phone")}
              {this.renderInput("bizImage", "Business Image")}
              {this.renderButton("Update Card")}
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
 
export default withRouter(EditCard);