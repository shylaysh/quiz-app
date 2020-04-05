import React, { Component } from "react";
class Napme extends Component {
  state = { dads: ["Dinesh", "Gopals", "Binod", "Ramesh"] };
  render() {
    let mp = this.state.dads;

    return (
      <div>
        {mp.map(m => (
          <div key={m}>{m}</div>
        ))}
      </div>
    );
  }
}

export default Napme;
