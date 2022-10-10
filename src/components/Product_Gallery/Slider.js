import React, { PureComponent } from "react";
import Slide from "./Slide";

class Slider extends PureComponent{


    render(){
        return (
            <div className="gallery-slider">
                <Slide />
                <Slide />
                <Slide />
                <Slide />
                <Slide />
            </div>
        )
    }
}

export default Slider;