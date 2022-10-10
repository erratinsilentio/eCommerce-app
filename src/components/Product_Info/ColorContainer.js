import { React, PureComponent } from "react";
import ColorButton from "./ColorButton";

class Color extends PureComponent {
  render() {
    return (
        <div className="color-container">
              <div className="color">Color:</div>
              <div className="color-buttons">
                <ColorButton />
                <ColorButton />
                <ColorButton />
              </div>
        </div>
    );
  }
}

export default Color;