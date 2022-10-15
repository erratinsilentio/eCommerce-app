import { React, PureComponent } from "react";

class SizeButton extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      selected: false,
    }
  }

  render() {
    return (
      <div
        className={ !this.state.selected ? this.props.className : "size-selected "+this.props.className}
        style={this.props.style}
        onClick={() => {this.props.onClick(); this.setState({selected: !this.state.selected}) }}
      >
        {this.props.size}
      </div>
    );
  }
}

export default SizeButton;
