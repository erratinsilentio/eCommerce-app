import React, { PureComponent } from "react";
import Title from "./TitleContainer";
import Attribute from "./AttributeContainer";
import Price from "./PriceContainer";

class Info extends PureComponent {
  render() {
    let product = this.props.state.product;
    let attributes = this.props.state.attributes;
    let prices = this.props.state.prices;

    console.log(attributes);
    return (
      <div className="info-container">
        <Title product={product}/>
        {attributes.map(attribute => <Attribute key={attribute.id} attributes={attribute} type={attribute.name}/>)}
        <Price prices={prices} />
      </div>
    );
  }
}

export default Info;
