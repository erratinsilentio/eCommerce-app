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

      pickedItem: {
        id: "",
        brand: "",
        name: "",
        price: null,
        currency: "",
        attributes: [],
        gallery: "",
        quantity: 0,
      },
    };

    this.addPickedAtributes = this.addPickedAtributes.bind(this);
  }

  componentDidMount() {
    let state = this.props.state;
    state.getByID(state.displayProduct).then((result) =>
      this.setState({
        product: result,
        gallery: result.gallery,
        attributes: result.attributes,
        prices: result.prices,
        addPickedAtributes: this.addPickedAtributes,

        pickedItem: {
          id: result.id,
          brand: result.brand,
          name: result.name,
          price: result.prices[this.state.currency].amount,
          currency: result.prices[this.state.currency].currency.label,
          gallery: result.gallery[0],
          quantity: 1,
        },
      })
    );
  }

  componentDidUpdate = () => 
    this.setState({ currency: this.props.state.chosenCurrency });

  addPickedAtributes = (pick) => (this.state.pickedItem.attributes = pick);

  render() {
    let product = this.state.product;
    let addToCart = this.props.state.addToCart;

    if (product.name === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <div
        className="product-container"
        onClick={this.props.onClick}
      >
        <Gallery gallery={this.state.gallery} />
        <div className="right-side">
          <Info state={this.state} />
          <Button className="add-to-cart" onClick={() => addToCart(this.state.pickedItem)}>ADD TO CART</Button>
          <div className="description-container">
            {parse(`${product.description}`)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
