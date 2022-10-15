/* eslint-disable jsx-a11y/alt-text */
import React, { PureComponent } from "react";

class Slide extends PureComponent {
  render() {
    let changeImage = this.props.changeImage;
    if (this.props.length === 0) {
      return <h1>loading</h1>;
    }
    return (
      <img
        src={this.props.image}
        className="gallery-slide"
        onMouseEnter={() => changeImage(this.props.image)}
      ></img>
    );
  }
}

export default Slide;
