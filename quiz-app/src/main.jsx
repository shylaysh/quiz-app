import React, { Component } from "react";
import Opts from "./opts";
class Main extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="quiz-head">
          <h2>Question No. 1 of 5</h2>
        </div>
        <div className="question">
          <h3>What is the capital of Nepal?</h3>
        </div>
        <br />
        <Opts potato={"Aaloo"} />
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
