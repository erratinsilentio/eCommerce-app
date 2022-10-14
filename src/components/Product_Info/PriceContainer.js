import { React, PureComponent } from "react";

class Price extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      symbol: "",
      currency: 0,
    };
  }

  getAmount = async (i) => {
    let amount = await this.props.prices[i].amount;
    return amount;
  };

  getSymbol = async (i) => {
    let symbol = await this.props.prices[i].currency.symbol;
    return symbol;
  };

  async componentDidUpdate() {
    this.setState({ currency: this.props.currency });
    let amount = await this.getAmount(this.state.currency);
    let symbol = await this.getSymbol(this.state.currency);
    this.setState({ amount: amount, symbol: symbol });
  }

  render() {
    return (
      <div
        className="price container"
        onClick={() => console.log(this.state.currency)}
      >
        <div className="price">Price:</div>
        <div className="price-value">
          {this.state.symbol} {this.state.amount}
        </div>
      </div>
    );
  }
}

export default Price;
