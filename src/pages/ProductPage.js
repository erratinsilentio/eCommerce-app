import React, { PureComponent } from "react";
import "../styles/productPage.css";
import Gallery from "../components/Product_Gallery/GalleryContainer";
import Info from "../components/Product_Info/index";
import Button from "../components/Buttons/AddToCart";
const parse = require("html-react-parser");

class ProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      gallery: [],
      attributes: [],
      prices: [],
    };
  }

  componentDidMount() {
    let state = this.props.state;
    state.getByID(state.displayProduct).then((result) =>
      this.setState({
        product: result,
        gallery: result.gallery,
        attributes: result.attributes,
        prices: result.prices,
      })
    );
  }

  render() {
    let product = this.state.product;

    console.log(product);

    if (product.name === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <>
        <div className="product-container">
          <Gallery gallery={this.state.gallery} />
          <div className="right-side">
            <Info state={this.state} />
            <Button className="add-to-cart">ADD TO CART</Button>
            <div className="description-container">
              {parse(`${product.description}`)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPage;
