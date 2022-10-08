import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/listing.css";
import addButton from "../styles/svg/add-to-cart.svg";

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
    let products = this.chosenCategory();
    console.log(products);
    return (
      <ul className="listing-container">
        {products.map((item) => (
          <li
            className="listing"
            key={item.name}
            onMouseEnter={() => this.setState({ style: { display: "block" } })}
            onMouseLeave={() => this.setState({style: {display: 'none'}})}
          >
            <div className="listing-image-box">
              <img src={item.gallery[0]} className="listing-image"></img>
            </div>
            <div className="listing-title">{item.name}</div>
            <div className="listing-price">
              {item.prices[0].currency.symbol}
              {item.prices[0].amount}
            </div>
            <img
              src={addButton}
              className="add-button"
              style={this.state.style}
            ></img>
          </li>
        ))}
      </ul>
    );
  }
}

export default Listing;
