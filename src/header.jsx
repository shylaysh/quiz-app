import React from "react";
import kbc from "./kbc.png";
export default function Header() {
  return (
    <header className="container card bg-primary p-3 text-white">
      <h4>
        <img
          className="img img-responsive"
          src={kbc}
          height="80px"
          width="80px"
        ></img>
        KO BANCHHA CROREPATI
      </h4>
    </header>
  );
}
