import React, { Component } from "react";
import PageTitle from "./common/PageTitle"
 
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageTitle titleText='Real App Home Page'/>
        <div className="row">
          <div className="col-12">
            <p>Home page</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;