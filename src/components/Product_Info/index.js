import React, { PureComponent } from "react";
import Title from "./TitleContainer";
import Attribute from "./AttributeContainer";
import Price from "./PriceContainer";

class Info extends PureComponent {


  render() {
    let product = this.props.state.product;
    let attributes = this.props.state.attributes;
    let prices = this.props.state.prices;
    let currency = this.props.state.currency;

    // console.log(attributes);
    return (
      <div className="info-container" onClick={() => console.log(this.state.currency)}>
        <Title product={product}/>
        {attributes.map(attribute => <Attribute key={attribute.id} attributes={attribute} type={attribute.name}/>)}
        <Price prices={prices} currency={currency}/>
      </div>
    );
  }
}

export default Info;
