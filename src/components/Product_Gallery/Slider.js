import React, { PureComponent } from "react";
import Slide from "./Slide";

class Slider extends PureComponent{

    render(){
        let gallery = this.props.gallery;
        let changeImage = this.props.changeImage;
        // console.log(gallery)
        return (
            <div className="gallery-slider">
                {gallery.map(slide => <Slide changeImage={changeImage} image={slide} />)}
            </div>
        )
    }
}

export default Slider;