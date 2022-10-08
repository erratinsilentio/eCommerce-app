import React, { PureComponent, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCategories, getCurrencies, getProductByID } from "./data/getData";
import { render } from "@testing-library/react";
import { responsePathAsArray } from "graphql";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      categories: [],
      chosenCategory: "all",
      productsAll: [],
      productsClothes: [],
      productsTech: [],
    };

    this.displayCategory = this.displayCategory.bind(this);
  }

  componentDidMount() {
    getCurrencies().then((result) => this.setState({ currencies: result }));
    getCategories().then((result) =>
      this.setState({
        categories: result,
        productsAll: result[0].products,
        productsClothes: result[1].products,
        productsTech: result[2].products,
        currency: "USD",
      })
    );
    getProductByID("ps-5").then(result => console.log(result))
  }

  displayCategory(name) {
    this.setState({ chosenCategory: name });
  }

  render() {
    if (!this.state.categories.length) {
      return <h1>loading...</h1>;
    }
    // console.log(this.state);
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                categories={this.state.categories}
                changeCategories={this.displayCategory}
              />
            }
          >
            <Route
              index
              element={<CategoryPage category={this.state.chosenCategory} state={this.state}/>}
            />
            <Route path="products" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
