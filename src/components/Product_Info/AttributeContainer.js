import { React, PureComponent } from "react";
import SizeButton from "./SizeButton";

class Attribute extends PureComponent {
  render() {
    let attribute = this.props.attributes;
    return (
      <div className="attribute-container">
        <div className="attribute">{attribute.id.toUpperCase()}:</div>
        <div className="attribute-buttons">
          {attribute.items.map((item) => {

            if(this.props.type==="Color"){
              return <SizeButton key={item.id} className="color-button" style={{backgroundColor: item.value}} />
            }
            return <SizeButton key={item.id} className="size-button" size={item.value} />
          }
          )}
        </div>
      </div>
    );
  }
}


export default Attribute;
