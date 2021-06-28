import React, { Component } from "react";
import PageTitle from "./common/PageTitle"
 
class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageTitle titleText='About Page'/>

        <div className="row">
          <div className="col-12">
            <p>Content example text for about page here.</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;