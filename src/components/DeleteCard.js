import React from 'react'
import cardService from '../services/cardService'
import { withRouter } from "react-router";
import { toast } from "react-toastify";



class DeleteCard extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
      data: {
        bizName: "",
        bizDescription: "",
        bizAddress: "",
        bizPhone: "",
        bizImage: ""
      },
      errors: {}

   };
   this.handleDelete = this.handleDelete.bind(this);
   this.handleCancel = this.handleCancel.bind(this);
}
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
        bizImage: card.bizImage
      };
    }

   handleDelete = async () => {
      try {
         await cardService.deleteCard(this.state.data._id);
         toast.success("Card is deleted");
         this.props.history.replace("/my-cards");          
      } catch (error) {
         console.log(error);
      }
   }

   handleCancel = () => {
      this.props.history.push("/my-cards");
    };

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
   }

   render(){
      return (
         <div className="container">
            <div className="card m-auto">
               <img
                  className="p-2"
                  src={this.state.data.bizImage}
                  width="100"
                  alt={this.state.data.bizName}
               />
               <div className="card-body">
                  <h5 className="card-title text-center">{this.state.data.bizName}</h5>
                  <p className="card-text">{this.state.data.bizDescription}</p>
                  <p className="card-text border-top pt-2">
                     <b>Tel: </b>
                     {this.state.data.bizPhone}
                     <br />
                     <b>Adress: </b> {this.state.data.bizAddress}
                  </p>               
               </div>
               <hr className="mb-1"/>
               <div className="row m-auto p-3">
                  <button className="btn btn-warning m-2" onClick={this.handleCancel}>Cancel</button>
                  <button className="btn btn-danger m-2" onClick={this.handleDelete}>Delete</button>
               </div>
               
            </div>
         </div>
      )
   }
}

export default withRouter(DeleteCard);