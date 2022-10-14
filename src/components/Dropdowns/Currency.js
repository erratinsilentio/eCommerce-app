import { React, PureComponent } from "react";

class Currency extends PureComponent {
  render() {
    let changeCurr = this.props.changeCurr;
    return (
      <ul
        className="currency-menu"
        style={this.props.style}
      >
        <li key="0" className="curr-list-item" onClick={() => changeCurr(0)}>
          $ USD
        </li>
        <li key="1" className="curr-list-item" onClick={() => changeCurr(1)}>
          £ GBP
        </li>
        <li key="2" className="curr-list-item" onClick={() => changeCurr(2)}>
          $ AUD
        </li>
        <li key="3" className="curr-list-item" onClick={() => changeCurr(3)}>
          ¥ JPY
        </li>
        <li key="4" className="curr-list-item" onClick={() => changeCurr(4)}>
          ₽ RUB
        </li>
      </ul>
    );
  }
}

export default Currency;
