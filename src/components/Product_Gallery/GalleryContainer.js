import React, { PureComponent } from "react";
import Slide from "./Slide";
import Slider from "./Slider";

class Gallery extends PureComponent{


    render(){
        return (
            <div className="gallery-container">
                <Slider />
                <div className="gallery-display"></div>
            </div>
        )
    }
}

export default Gallery;