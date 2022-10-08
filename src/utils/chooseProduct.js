export default function chooseProduct(name) {
    this.setState({ displayProduct: name });
    console.log(this.state.displayProduct)
  }