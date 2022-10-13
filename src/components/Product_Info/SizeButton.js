import { React, PureComponent } from "react";

class SizeButton extends PureComponent {
  render() {
    return (
        <div className={this.props.className} style={this.props.style}>
          {this.props.size}
        </div>
    );
  }
}

export default SizeButton;