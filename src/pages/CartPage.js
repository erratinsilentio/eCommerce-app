import React, { PureComponent } from "react";
import "../styles/cartPage.css"
import AttributeButton from "../components/Buttons/AttributeButton";

class CartPage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            cart: [],
        }
    }
    
    async componentDidMount() {
        let cart = this.props.state.cart
        let getByID = this.props.state.getByID
        let array = [];
        await Promise.all(cart.map(async item => {
            let newItem = await getByID(item.id)
            array.push(newItem);
        }))
        this.state.cart = array
        console.log(this.state.cart)
    }

    render(){
        let cart = this.props.state.cart;
        return (
        <>
        <h1 className="cart-title">cart</h1>
        <div className="content-cont">

            <div className="ci-cont">
                {/* PRODUCT INFO */}
                <div className="ci-info-cont">
                    {/* NAME AND BRAND */}
                    <div className="ci-title-cont">
                        <div className="ci-title-brand">{cart[0].brand}</div>
                        <div className="ci-title-name">{cart[0].name}</div>
                    </div>
                    {/* PRICE */}
                    <div className="ci-price-cont">
                        {cart[0].currency} {cart[0].price}
                    </div>
                    {/* ATTRIBUTES */}
                    <div className="ci-atr-cont">

                    </div>
                </div>
                {/* PRODUCT QUANTITY */}
                <div className="ci-quantity-cont">
                    <button className="quant-btn">+</button>
                    {cart[0].quantity}
                    <button className="quant-btn">-</button>
                </div>
                {/* PRODUCT IMAGE */}
                <div className="ci-image-cont">
                    <img className="ci-img" src={cart[0].gallery}></img>
                </div>
            </div>

        </div>
        </>
        )

    }

}

export default CartPage;