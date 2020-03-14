import React, { Component } from "react";
import Opts from "./opts";
import { data } from "./data.js";
//import Napme from "./maps";
class Main extends Component {
  state = {
    qn: 0
  };

  handleNext = () => {
    let newQn = this.state.qn + 1;
    if (this.state.qn === data.length - 1) {
      alert("Thank you for participating!");
      return;
    }
    this.setState({ qn: newQn });
  };

  render() {
    let q = this.state.qn;
    let tn = data.length;
    let options = data[q].ops;
    let rightAns = options[data[q].ans]; //data[q].ans; options[2]

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
          <Opts key={opt} optName={opt} ansName={rightAns} /> // 'key={opt}' is just for react. If we omit this expression, it still works.
        ))}

        <br />

        <div>
          <span className="btn" onClick={this.handleNext}>
            Next Question >>
          </span>
        </div>
        <br />
        <span className="ans-tick"></span>
      </main>

      // <Napme />
    );
  }
}

export default Main;
