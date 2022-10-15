import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import shop_logo from "../styles/svg/shop-logo.svg";
import Cart from "../components/Dropdowns/Cart";
import Currency from "../components/Dropdowns/Currency";
import Info from "../components/Product_Info";

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
       {/* HEADER */}
        <div className="header">

          {/* CATEGORIES */}
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

          {/* SHOP LOGO */}
          <div className="header-container">
            <Link to="/" className="link">
              <img src={shop_logo} className="shop-logo"></img>
            </Link>
          </div>

          {/* DROPDOWNS */}
          <div className="header-container side-menu">

            {/* CURRENCY MENU */}
            <div
              className="side-menu-btn"
              onMouseEnter={() => this.setState({ currencyDisplay: "block" })}
              onMouseLeave={() => this.setState({ currencyDisplay: "none" })}
            >
              {this.props.symbol}
              <Currency
                style={{ display: this.state.currencyDisplay }}
                changeCurr={changeCurr}
              />
            </div>

            {/* CART MENU */}
            <div
              className="side-menu-btn cart-btn"
              onMouseEnter={() => this.setState({ cartDisplay: "block" })}
              onMouseLeave={() => this.setState({ cartDisplay: "none" })}
            >
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                cart
              </Link>
              <Cart className="cart-menu" display={this.state.cartDisplay} cart={this.props.state.cart} />
            </div>

          </div>
        </div>

        {/* SHOP CONTENT */}
        <Outlet />
      </>
    );
  }
}

export default Layout;
