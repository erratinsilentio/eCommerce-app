import { React, PureComponent } from "react";

class Title extends PureComponent {
  render() {
    return (
      <div className="title-container">
        <div className="title">Apollo</div>
        <div className="subtitle">Running Shirt</div>
      </div>
    );
  }
}

export default Title;