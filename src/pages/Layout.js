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
                <li
                  key={item.name}
                  className="category-list-cell"
                  onClick={() => this.props.changeCategories(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="header-container">
            <img src={shop_logo} className="shop-logo"></img>
          </div>

          <div className="header-container side-menu">
            <a className="side-menu-btn">$</a>
            <a className="side-menu-btn">cart</a>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

export default Layout;
