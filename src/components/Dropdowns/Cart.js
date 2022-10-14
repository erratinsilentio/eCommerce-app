import {React, PureComponent} from "react";
import blank from "../../styles/svg/blank-face.svg"

class Cart extends PureComponent{

    render(){
        return (
            <div className={this.props.className} style={{display: this.props.display}}>
                <img src={blank}></img>
            </div>
        )
    }
}

export default Cart;