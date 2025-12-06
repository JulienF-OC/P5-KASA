import React from "react";
import "./Content.scss";
import apartments from "../data/logements.json";

function Content() {
  return (
    <div className="container">
      <div className="cards">
        {apartments.map((apt) => (
          <div className="card" key={apt.id}>
            <img src={apt.cover} alt={apt.title} />
            <h3 className="card-title">{apt.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
