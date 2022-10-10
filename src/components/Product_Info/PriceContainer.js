import { React, PureComponent } from "react";

class Price extends PureComponent {
  render() {
    return (
      <div className="price container">
        <div className="price">Price:</div>
        <div className="price-value">99$</div>
      </div>
    );
  }
}

export default Price;
