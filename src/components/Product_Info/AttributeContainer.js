import { React, PureComponent } from "react";
import AttributeButton from "../Buttons/AttributeButton";

class Attribute extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedAtr: null,
    };
  }

  render() {
    let attribute = this.props.attributes;
    let type = this.props.type;
    let addAtribute = this.props.onClick;

    return (
      <div className="attribute-container">
        <div className="attribute">{attribute.id.toUpperCase()}:</div>
        <div className="attribute-buttons">
          {attribute.items.map((item) => {
            {/* RENDER ATTRIBUTE BUTTON WITH DIFFERENT STYLE IF IT'S A COLOR */}
            if (type === "Color") {
              return (
                <AttributeButton
                  key={item.id}
                  className={
                    this.state.selectedAtr === item.value
                      ? "color-button color-selected"
                      : "color-button"
                  }
                  style={{ backgroundColor: item.value }}
                  ifSelected={this.state.ifSelected}
                  selected={this.state.selected}
                  onClick={() => {
                    addAtribute({ type: type, value: item.value });
                    this.setState({ selectedAtr: item.value });
                  }}
                />
              );
            }
            return (
              <AttributeButton
                key={item.id}
                className={
                  this.state.selectedAtr === item.value
                    ? "size-button size-selected"
                    : "size-button"
                }
                size={item.value}
                onClick={() => {
                  addAtribute({ type: type, value: item.value });
                  this.setState({ selectedAtr: item.value });
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attribute;
