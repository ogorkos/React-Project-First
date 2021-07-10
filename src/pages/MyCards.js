import React, { Component } from "react";
import PageTitle from "./common/PageTitle"
import cardService from '../services/cardService'
import Card from '../components/Card'

class MyCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:[],
      fav:false
    };
    this.favoritesCards = this.favoritesCards.bind(this);
  }
  // state = {
  //   cards:[],
  //   fav: false
  // };



  async componentDidMount() {
    const {data} = await cardService.getMyCards()
    // data.map(d => console.log(d))
    if (data.length > 0) this.setState({cards:data})
  }

  addCard(){
    window.location = '/create-card'
  }
  favoritesCards(){
    // console.log('favorites cards');
    this.setState({fav:!this.state.fav});
    console.log(this.state.fav);
  }
  
  render() {
    return (
      <div className="container ">
        <PageTitle titleText='My Cards Page' />

        <button className="btn btn-success m-1" onClick={this.addCard}>Add card</button>
        <button className="btn btn-warning m-1" onClick={this.favoritesCards}>
        {this.state.fav===false ? "My favorites" : "All cards"}
          </button>
        <div className="row">
          <div className="col-12">
            <p>Your cards in the list below...</p>
          </div>
          {/* row d-flex justify-content-center flex-wrap */}
          <div className="row d-flex justify-content-around  flex-wrap">
            {
              this.state.cards.length>0 && this.state.fav===true
              ? this.state.cards.filter(card => card.favorite === true)
              .map(card => <Card className="col-md-4" key={card._id} card={card} /> )
              : this.state.cards.length>0 
              ?
              this.state.cards.map(card => <Card className="col-md-4" key={card._id} card={card} /> )
              : <p>No cards</p>
            }
          </div>          

        
          
        </div>
      </div>
    );
  }
}

export default MyCards;
