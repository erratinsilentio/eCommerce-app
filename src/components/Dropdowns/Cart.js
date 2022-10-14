import {React, PureComponent} from "react";

class Cart extends PureComponent{

    render(){
        return (
            <div className={this.props.className} style={{display: this.props.display}}>

            </div>
        )
    }
}

export default Cart;