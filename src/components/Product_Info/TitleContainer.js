import { React, PureComponent } from "react";

class Title extends PureComponent {
  render() {
    let product = this.props.product;
    console.log(product)
    return (
      <div className="title-container">
        <div className="title">{product.brand}</div>
        <div className="subtitle">{product.name}</div>
      </div>
    );
  }
}

export default Title;