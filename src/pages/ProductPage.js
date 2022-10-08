import React, { PureComponent } from "react";

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
        <h1>product page</h1>
        <h2>{this.props.state.displayProduct}</h2>
        <h3>{product.name}</h3>
      </>
    );
  }
}

export default ProductPage;
