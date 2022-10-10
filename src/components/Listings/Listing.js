import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/listing.css";
import addButton from "../../styles/svg/add-to-cart.svg";

class Listing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      style: { display: "none" },
    };
  }

  chosenCategory() {
    if (this.props.state.chosenCategory === "all") {
      return this.props.state.productsAll;
    }
    if (this.props.state.chosenCategory === "clothes") {
      return this.props.state.productsClothes;
    }
    if (this.props.state.chosenCategory === "tech") {
      return this.props.state.productsTech;
    }
  }

  render() {
    let chooseProduct = this.props.chooseProduct;
    let item = this.props.item;
    let state = this.props.state;
    return (
      <Link to={"/products"} className="link">
      <li
        className="listing"
        key={item.id}
        onMouseEnter={() => this.setState({ style: { display: "block" } })}
        onMouseLeave={() => this.setState({ style: { display: "none" } })}
        onClick={() => chooseProduct(item.id)}
      >
        <div className="listing-image-box">
          <img src={item.gallery[0]} className="listing-image"></img>
        </div>
        <div className="listing-title">{item.name}</div>
        <div className="listing-price">
          {item.prices[state.chosenCurrency].currency.symbol}
          {item.prices[state.chosenCurrency].amount}
        
        <img
          src={addButton}
          className="add-button"
          style={this.state.style}
        ></img>
        </div>
      </li>
      </Link>
    );
  }
}

export default Listing;
