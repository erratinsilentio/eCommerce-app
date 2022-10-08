import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/categoryPage.css"
import Listing from "../components/Listing";


class CategoryPage extends PureComponent {

    render(){

        return (
            <>
            <h1 className="category-title">{this.props.category}</h1>
            {/* <div className="listing-container"> */}
            <Listing state={this.props.state}/>
            {/* </div> */}
            </>
          )
    }

}

export default CategoryPage;