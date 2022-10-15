import { React, PureComponent } from "react";
import blank from "../../styles/svg/blank-face.svg";
import CartProduct from "../Cart_Display/CartProduct";
import Button from "../Buttons/Button";
import "../../styles/miniCart.css";

class Cart extends PureComponent {
  render() {
    let cart = this.props.cart;
    return (
      <div
        className={this.props.className}
        style={{ display: this.props.display }}
      >
        {cart.length === 0 ? (
          <img src={blank}></img>
        ) : (
          <div className="mc-container">
            <div className="mc-mybag">
              My Bag
              <div className="mc-bag-count">3 items</div>
            </div>
            <CartProduct cart={this.props.cart} />
            <div className="mc-total">
              Total:
              <div className="mc-total-num">238$</div>
            </div>
            <div className="mc-buttons">
              <Button className="mc-button view-btn">VIEW BAG</Button>
              <Button className="mc-button check-btn">CHECK-OUT</Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
