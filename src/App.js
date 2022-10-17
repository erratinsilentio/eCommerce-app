import React, { PureComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCategories, getCurrencies, getProductByID } from "./data/getData";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // IMPORT DATA HERE //
      currencies: [],
      categories: [],
      // CHANGING DISPLAYED CONTENT //
      chosenCategory: "all",
      chosenCurrency: 0,
      // RE-ARRANGE IMPORTED PRODUCTS //
      productsAll: [],
      productsClothes: [],
      productsTech: [],
      // SAVE CLIDKED LISTING SO IT REMAINS AFTER RELOAD //
      displayProduct: localStorage.getItem("product"),
      // FETCH PRODUCT BY ID //
      getByID: getProductByID,
      // HANDLE CURRENCY CHANGE //
      changeCurrency: this.changeCurrency,
      // HANDLE CART //
      cart: [],
      addToCart: this.addToCart,
    };

    this.displayCategory = this.displayCategory.bind(this);
    this.chooseProduct = this.chooseProduct.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.addToCart = this.addToCart.bind(this);
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

  chooseProduct = (name) => {
    localStorage.setItem("product", name);
    this.setState({ displayProduct: localStorage.getItem("product") });
  };

  changeCurrency = (key) => this.setState({ chosenCurrency: key });

  addToCart = (item) => {
    let sameItem = this.state.cart.find(i => i===item)
    
    sameItem
      ? sameItem.quantity++
      : this.setState({ cart: [...this.state.cart, item] }, () => {
        console.log(this.state.cart, sameItem);
      }); 

    console.log(this.state.cart)
  };

  render() {
    if (!this.state.categories.length) {
      return <h1>loading...</h1>;
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                state={this.state}
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
                  onClick={() => console.log(this.state.cart)}
                />
              }
            />
            <Route
              path="products"
              element={
                <ProductPage
                  state={this.state}
                  onClick={() => console.log(this.state.cart)}
                />
              }
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
