import { React, PureComponent } from "react";
import AttributeButton from "../Buttons/AttributeButton";

class Attribute extends PureComponent {
  render() {
    let attribute = this.props.attributes;
    let type = this.props.type;
    let addAtribute = this.props.onClick;

    return (
      <div className="attribute-container">
        <div className="attribute">{attribute.id.toUpperCase()}:</div>
        <div className="attribute-buttons">
          {attribute.items.map((item) => {
            if (type === "Color") {
              return (
                <AttributeButton
                  key={item.id}
                  className="color-button"
                  style={{ backgroundColor: item.value }}
                />
              );
            }
            return (
              <AttributeButton
                key={item.id}
                className="size-button"
                size={item.value}
                onClick={() => addAtribute({ value: item.value })}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attribute;
