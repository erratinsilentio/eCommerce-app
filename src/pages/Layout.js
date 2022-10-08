import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import shop_logo from "../styles/svg/shop-logo.svg";

class Layout extends PureComponent {
  render() {
    let categories = this.props.categories;
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
            <a className="side-menu-btn">$</a>
            <Link to="/cart" className="side-menu-btn">
              cart
            </Link>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

export default Layout;
