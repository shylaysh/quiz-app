import React, { Component } from "react";
import { data } from "./data.js";

class Opts extends Component {
  state = {
    cls: "opts"
  };

  handleClick = () => {
    console.log(this.props.potato);
    let result = data.ans;

    if (result === "right") {
      return this.setState({ cls: "right" });
    } else {
      return this.setState({ cls: "wrong" });
    }
  };

  render() {
    return (
      <div className={this.state.cls} onClick={this.handleClick}>
        Kathmandu
      </div>
    );
  }
}

export default Opts;
