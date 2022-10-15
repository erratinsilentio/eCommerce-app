import { React, PureComponent } from "react";
import Price from "../Product_Info/PriceContainer";
import Attribute from "../Product_Info/AttributeContainer";
import Title from "../Product_Info/TitleContainer";
import "../../styles/miniCart.css";
class CartProduct extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      product: [],
      gallery: [],
      attributes: [],
    };
  }
  render() {
    let cart = this.props.cart;
    return (
      <div className="cart-items-container">
        <div className="ci-info-container">
          <div className="ci-title">
            <div className="brand"></div>
            <div className="name"></div>
          </div>
          
        </div>

        <div className="ci-quantity-container">
          <div className="quantity-btn"></div>
          1
          <div className="quantity-btn"></div>
        </div>

        <div className="ci-image-container"></div>
      </div>
    );
  }
}

export default CartProduct;
