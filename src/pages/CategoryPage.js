import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/categoryPage.css"
import Listings from "../components/Listings/Listings";


class CategoryPage extends PureComponent {
    render(){
        return (
            <>
            <h1 onClick={this.props.onClick} className="category-title">{this.props.category}</h1>
            <Listings state={this.props.state} chooseProduct={this.props.chooseProduct}/>
            </>
          )
    }

}

export default CategoryPage;