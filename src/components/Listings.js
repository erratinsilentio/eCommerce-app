import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/listing.css";
import Listing from "./Listing";
import addButton from "../styles/svg/add-to-cart.svg";

class Listings extends PureComponent {


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
        {products.map(product => <Listing key={product.id} item={product}/>)}
      </ul>
    );
  }
}

export default Listings;
