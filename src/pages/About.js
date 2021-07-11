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
          <p>Morbi in vulputate turpis, id tincidunt magna. Nullam cursus diam at tortor pretium hendrerit. Praesent vitae rutrum est. Nulla facilisi. Nulla fringilla tempus elit, accumsan ullamcorper mi consectetur feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a nibh ex. Sed lacus enim, lacinia non nisl eu, rhoncus pulvinar purus. Nulla luctus augue pulvinar ligula luctus, id rutrum felis iaculis.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna dolor, sagittis sit amet malesuada sed, aliquam sit amet ipsum. Maecenas suscipit felis in dictum dictum. Suspendisse fermentum dui sit amet dolor ornare, in condimentum mauris molestie. Proin molestie urna lobortis commodo iaculis. Maecenas gravida varius mattis. In hac habitasse platea dictumst. Quisque vitae nibh bibendum, accumsan lacus vel, bibendum sapien.</p>
          
          <p>Proin mollis urna nec enim malesuada, vel gravida nisi sodales. Proin efficitur est sagittis, faucibus purus vitae, eleifend mi. Vestibulum sed maximus orci. Quisque porttitor volutpat tempor. Curabitur feugiat mauris eu massa vulputate, eget laoreet metus suscipit. Etiam vel faucibus erat, nec ultrices orci. Nulla sollicitudin mauris ac eleifend viverra. In elementum accumsan nisi, a sollicitudin augue elementum vitae. Sed ut cursus massa. Duis sed tortor ac velit suscipit luctus vel rutrum libero. Donec vitae imperdiet enim, non porttitor purus. Nunc ac imperdiet sem, sed lobortis nisl. Etiam mattis arcu varius porttitor condimentum. Nunc eget tempor dui, iaculis porta diam. Pellentesque luctus nulla in turpis tincidunt elementum. Etiam a nibh vitae massa varius ultrices ut et tortor. Aliquam facilisis fringilla porttitor. Praesent tincidunt ac neque et.</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;