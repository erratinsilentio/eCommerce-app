import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import shop_logo from "../styles/svg/shop-logo.svg";
import Cart from "../components/Dropdowns/Cart";

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currencyDisplay: "none",
      cartDisplay: "none",
    };
  }

  render() {
    let categories = this.props.categories;
    let changeCurr = this.props.changeCurrency;
    return (
      <>
        <div className="header">
          <div className="header-container">
            <ul className="category-list">
              {categories.map((item) => (
                <Link to="/" className="link">
                  <li
                    key={item.name}
                    className="category-list-cell"
                    onClick={() => this.props.changeCategories(item.name)}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="header-container">
            <Link to="/" className="link">
              <img src={shop_logo} className="shop-logo"></img>
            </Link>
          </div>

          <div className="header-container side-menu">
            <a
              className="side-menu-btn"
              onMouseEnter={() => this.setState({ currencyDisplay: "block" })}
              onMouseLeave={() => this.setState({ currencyDisplay: "none" })}
            >
              $
              <ul
                className="currency-menu"
                style={{ display: this.state.currencyDisplay }}
                onMouseEnter={() => this.setState({ currencyDisplay: "block" })}
              >
                <li
                  key="0"
                  className="curr-list-item"
                  onClick={() => changeCurr(0)}
                >
                  $ USD
                </li>
                <li
                  key="1"
                  className="curr-list-item"
                  onClick={() => changeCurr(1)}
                >
                  £ GBP
                </li>
                <li
                  key="2"
                  className="curr-list-item"
                  onClick={() => changeCurr(2)}
                >
                  $ AUD
                </li>
                <li
                  key="3"
                  className="curr-list-item"
                  onClick={() => changeCurr(3)}
                >
                  ¥ JPY
                </li>
                <li
                  key="4"
                  className="curr-list-item"
                  onClick={() => changeCurr(4)}
                >
                  ₽ RUB
                </li>
              </ul>
            </a>

            <div
              className="side-menu-btn cart-btn"
              onMouseEnter={() => this.setState({ cartDisplay: "block" })}
              onMouseLeave={() => this.setState({ cartDisplay: "none" })}
            >
              <Link to="/cart" style={{textDecoration: "none", color: "black"}}>cart</Link>
              <Cart className="cart-menu" display={this.state.cartDisplay} />
            </div>
            
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

export default Layout;
