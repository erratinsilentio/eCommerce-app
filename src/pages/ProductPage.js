import React, { PureComponent } from "react";
import "../styles/productPage.css";
import Gallery from "../components/Product_Gallery/GalleryContainer";
import Info from "../components/Product_Info/index";

class ProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    let state = this.props.state;
    state
      .getByID(state.displayProduct)
      .then((result) => this.setState({ product: result }));
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
          <Gallery />
          <div className="right-side">
          <Info />
          <button className="add-to-cart"></button>
          <div className="description-container"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPage;
