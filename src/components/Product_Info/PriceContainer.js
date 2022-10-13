import { React, PureComponent } from "react";

class Price extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      symbol: "",
    };
  }

  getAmount = async () => {
    let amount = await this.props.prices[0].amount;
    return amount;
  }

  getSymbol = async () => {
    let symbol = await this.props.prices[0].currency.symbol;
    return symbol;
  }


  async componentDidUpdate(){
    let amount = await this.getAmount()
    let symbol = await this.getSymbol()
    this.setState({amount: amount, symbol: symbol})
  }

  render () {

    return (
      <div className="price container">
        <div className="price">Price:</div>
        <div className="price-value">{this.state.symbol} {this.state.amount}</div>
      </div>
    );
    
  }
}

export default Price;
