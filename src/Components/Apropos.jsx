import React from "react";
import "./Apropos.scss";
import Collapse from "./Collapse.jsx";
import data from "../data/apropos.json";

function Apropos() {
  return (
    <div>
      <div className="banniere-apropos">
        <img src="/banner-apropos.jpg" alt="banniere a propos" />
      </div>

      <div className="apropos-container">
        {data.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default Apropos;
