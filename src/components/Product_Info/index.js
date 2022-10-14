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

  addAtribute = (atr) => {
    let sameItem = this.state.attributes.find(
      (item) => item.type === atr.type && item.value === atr.value
    );
    let similarItem = this.state.attributes.find(
      (item) => item.type === atr.type && item.value !== atr.value
    );
    // eslint-disable-next-line no-unused-expressions
    sameItem
      ? console.log("same item exists")
      : similarItem
      ? this.setState({
          attributes: this.state.attributes.map((attribute) =>
            attribute === similarItem ? atr : attribute
          ),
        })
      : this.setState({ attributes: [...this.state.attributes, atr] });

    console.log(this.state);
  };

  render() {
    let product = this.props.state.product;
    let attributes = this.props.state.attributes;
    let prices = this.props.state.prices;
    let currency = this.props.state.currency;

    console.log(this.state);
    return (
      <div
        className="info-container"
        onClick={() => console.log(this.state.currency)}
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
