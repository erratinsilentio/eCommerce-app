import React, { PureComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCategories, getCurrencies, getProductByID } from "./data/getData";
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
      chosenCurrency: 0,
      productsAll: [],
      productsClothes: [],
      productsTech: [],
      displayProduct: "",
      getByID: getProductByID,
      changeCurrency: this.changeCurrency,
    };

    this.displayCategory = this.displayCategory.bind(this);
    this.chooseProduct = this.chooseProduct.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this)
  }

  componentDidMount() {
    getCurrencies().then((result) => this.setState({ currencies: result }));
    getCategories().then((result) =>
      this.setState({
        categories: result,
        productsAll: result[0].products,
        productsClothes: result[1].products,
        productsTech: result[2].products,
        currency: 0,
      })
    );
  }

  displayCategory = (name) => this.setState({ chosenCategory: name });
  
  chooseProduct = (name) => this.setState({ displayProduct: name });

  changeCurrency = (key) => this.setState({chosenCurrency: key});
  

  render() {
    if (!this.state.categories.length) {
      return <h1>loading...</h1>;
    }
    console.log(this.state.currencies);
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                categories={this.state.categories}
                changeCategories={this.displayCategory}
                changeCurrency={this.changeCurrency}
                symbol={this.state.currencies[this.state.chosenCurrency].symbol}
              />
            }
          >
            <Route
              index
              element={
                <CategoryPage
                  category={this.state.chosenCategory}
                  state={this.state}
                  chooseProduct={this.chooseProduct}
                />
              }
            />
            <Route
              path="products"
              element={<ProductPage state={this.state} />}
            />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
