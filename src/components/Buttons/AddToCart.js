import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { PureComponent } from "react";


class Button extends PureComponent{

    render(){
        return <button className={this.props.className} onClick={this.props.onClick}>{this.props.children}</button>
    }
}

export default Button;