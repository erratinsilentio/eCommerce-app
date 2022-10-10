import { React, PureComponent } from "react";
import SizeButton from "./SizeButton";

class Size extends PureComponent {
  render() {
    return (
        <div className="size-container">
        <div className="size">Size:</div>
        <div className="size-buttons">
          <SizeButton />
        </div>
      </div>
    );
  }
}

export default Size;