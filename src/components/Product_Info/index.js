import React, { PureComponent } from "react";
import Title from "./TitleContainer";
import Attribute from "./AttributeContainer";
import Price from "./PriceContainer";

class Info extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      attributes: [],
    };
    this.addAtribute = this.addAtribute.bind(this);
  }

  // FUNCTION MAKES SURE YOU CAN CHOOSE ONLY ONE ATTRIBUTE OF THE TYPE
  addAtribute = (atr) => {

    let sameAtr = this.state.attributes.find(
      (item) => item.type === atr.type && item.value === atr.value
    );
    let sameTypeAtr = this.state.attributes.find(
      (item) => item.type === atr.type && item.value !== atr.value
    );
    
    sameAtr
      ? console.log("same item exists")
      : sameTypeAtr
      ? this.setState({
          attributes: this.state.attributes.map((item) =>
            item === sameTypeAtr ? atr : item
          ),
        })
      : this.setState({ attributes: [...this.state.attributes, atr], }, () => {
        console.log("state: ", this.state.attributes)
        console.log("attribute ", atr)
      });

    this.props.state.addPickedAtributes(this.state.attributes)
  };

  render() {
    let product = this.props.state.product;
    let attributes = this.props.state.attributes;
    let prices = this.props.state.prices;
    let currency = this.props.state.currency;

    return (
      <div
        className="info-container"
      >
        <Title product={product} />
        {attributes.map((attribute) => (
          <Attribute
            key={attribute.id}
            attributes={attribute}
            type={attribute.name}
            onClick={this.addAtribute}
          />
        ))}
        <Price prices={prices} currency={currency} />
      </div>
    );
  }
}

export default Info;
