import React, { PureComponent } from "react";
import "../styles/productPage.css"

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

    if(product.name===0){
        return <h1>Loading...</h1>
    }
    return (
      <>
        <div className="product-container">
          <div className="gallery-container">
            <div className="gallery-slider"></div>
            <div className="gallery-display"></div>
          </div>
          <div className="info-container">
            <div className="title-container"></div>
            <div className="size-container"></div>
            <div className="color-container"></div>
            <div className="price container"></div>
            <button className="add-to-cart"></button>
            <div className="description-container"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPage;
