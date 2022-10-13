import React, { PureComponent } from "react";
import Slide from "./Slide";
import Slider from "./Slider";

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dislay: null,
    };

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage = (img) => this.setState({ display: img });
  
  render() {
    let gallery = this.props.gallery;
    let display = this.state.display;

    return (
      <div className="gallery-container">
        <Slider gallery={gallery} changeImage={this.changeImage} />
        <img
          src={display ? display : gallery[0]}
          className="gallery-display"
        ></img>
      </div>
    );
  }
}

export default Gallery;
