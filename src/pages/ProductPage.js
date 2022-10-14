import React, { PureComponent } from "react";
import "../styles/productPage.css";
import Gallery from "../components/Product_Gallery/GalleryContainer";
import Info from "../components/Product_Info/index";
import Button from "../components/Buttons/Button";
const parse = require("html-react-parser");

class ProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      gallery: [],
      attributes: [],
      prices: [],
      currency: this.props.state.chosenCurrency,
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

  componentDidUpdate(){
    this.setState({currency: this.props.state.chosenCurrency})
  }

  render() {
    let product = this.state.product;
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
