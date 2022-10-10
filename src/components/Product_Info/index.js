import React, { PureComponent } from "react";
import Title from "./TitleContainer";
import Size from "./SizeContainer";
import Color from "./ColorContainer";
import Price from "./PriceContainer";

class Info extends PureComponent {
  render() {
    return (
      <div className="info-container">
        <Title />
        <Size />
        <Color />
        <Price />
      </div>
    );
  }
}

export default Info;
