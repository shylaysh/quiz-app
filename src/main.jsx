import React, { useState } from "react";
import { data } from "./data.js";

function Main() {
  const [q, setQ] = useState(0);

  var options = data[q].ops;

  const [total, setTotal] = useState(new Array(data.length));

  const ansStatus = ind => {
    if (ind === data[q].ans) {
      total[q] = 1; // right answer
    } else {
      total[q] = 0; // wrong answer
    }
    setTotal(total);
    //

    // console.log(rtAns);

    // var totalRight = rtAns.length;
    //console.log(totalRight);

    ////////////////////////////////////////////////////////////////////////////////////////

    // for (const v of total) {
    //   var totalRight = rtAns.length;
    //   console.log(totalRight);
    // }
  };
  const showAns = () => {
    const rtAns = total.filter(ttl => ttl === 1);
    console.log(rtAns.length);
  };

  const nextQues = () => {
    showAns();
    //document.getElementById("subBtn").innerHTML = data[q + 1].ques;
    // document.write(data[q + 1].ques);
    // document.write(`<div>${data[q + 1].ops}</div>`);
    // document.write(`<button>
    //   Next Question>>
    // </button>`);
    if (q < data.length - 1) {
      setQ(q + 1);
    }

    if (data.length - 1 === q) {
      alert("You have successfully completed the KBC game!");
    }
  };

  return (
    <main className="container card bg-warning font-weight-bold">
      <div className="text-danger">
        <h4>
          Question {q + 1} of {data.length}
        </h4>
        <hr></hr>
      </div>

      {data[q].ques}

      <section>
        {options.map((ar, index) => (
          <div key={index} className="card p-1 m-1">
            <button
              className="text-left btn-dark"
              onClick={() => {
                ansStatus(index);
              }}
            >
              {ar}
            </button>
          </div>
        ))}

        <button className="btn btn-success m-2" onClick={nextQues} id="subBtn">
          Next Question>>
        </button>
      </section>
    </main>
  );
}

export default Main;
