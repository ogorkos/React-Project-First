import React, { Component } from "react";
import PageTitle from "./common/PageTitle";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageTitle titleText="Home Page" />
        <div className="row">
          <div className="col-12">
            <p>
              Morbi in vulputate turpis, id tincidunt magna. Nullam cursus diam
              at tortor pretium hendrerit. Praesent vitae rutrum est. Nulla
              facilisi. Nulla fringilla tempus elit, accumsan ullamcorper mi
              consectetur feugiat. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Sed a nibh ex. Sed lacus enim, lacinia non
              nisl eu, rhoncus pulvinar purus. Nulla luctus augue pulvinar
              ligula luctus, id rutrum felis iaculis.
            </p>
            <div className="d-flex justify-content-center m-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4p_JVwpmf7U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              magna dolor, sagittis sit amet malesuada sed, aliquam sit amet
              ipsum. Maecenas suscipit felis in dictum dictum. Suspendisse
              fermentum dui sit amet dolor ornare, in condimentum mauris
              molestie. Proin molestie urna lobortis commodo iaculis. Maecenas
              gravida varius mattis. In hac habitasse platea dictumst. Quisque
              vitae nibh bibendum, accumsan lacus vel, bibendum sapien.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
