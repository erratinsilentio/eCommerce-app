import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/categoryPage.css"
import Listings from "../components/Listings";


class CategoryPage extends PureComponent {

    render(){

        return (
            <>
            <h1 className="category-title">{this.props.category}</h1>
            {/* <div className="listing-container"> */}
            <Listings state={this.props.state}/>
            {/* </div> */}
            </>
          )
    }

}

export default CategoryPage;