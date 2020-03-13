import React, { Component } from "react";
import Opts from "./opts";
import { data } from "./data.js";
class Main extends Component {
  state = {
    qn: 0
  };

  render() {
    let q = this.state.qn;
    let tn = data.length;
    let options = data[q].ops;

    return (
      <main>
        <div className="quiz-head">
          <h2>
            Question No. {q + 1} of {tn}
          </h2>
        </div>
        <div className="question">
          <h3>{data[q].ques}</h3>
        </div>
        <br />
        {/* <Opts potato={"Aaloo"} /> */}

        {options.map(opt => (
          <Opts key={opt} optName={opt} /> // 'key={opt}' is just for react. If we omit this expression, it still works.
        ))}
        <br />
        <div>
          <span className="btn">Next Question >></span>
        </div>
        <br />
        <span className="ans-tick"></span>
      </main>
    );
  }
}

export default Main;
