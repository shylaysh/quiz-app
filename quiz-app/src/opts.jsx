import React, { Component } from "react";

class Opts extends Component {
  state = {
    cls: "opts"
  };

  handleClick = () => {
    //console.log(this.props.potato);
    let result = this.props.ansName;

    if (result === this.props.optName) {
      return this.setState({ cls: "right" });
    } else {
      return this.setState({ cls: "wrong" });
    }
  };

  render() {
    return (
      <div className={this.state.cls} onClick={this.handleClick}>
        {this.props.optName}
      </div>
    );
  }
}

export default Opts;
