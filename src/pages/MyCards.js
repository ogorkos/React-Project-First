import React, { Component } from "react";
import PageTitle from "./common/PageTitle"

class MyCards extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageTitle titleText='My Cards Page' />
        
        <div className="row">
          <div className="col-12">
            <p>My Cards</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCards;
