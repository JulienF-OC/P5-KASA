import React from "react";
import "./Content.scss";
import apartments from "../data/logements.json";

function Content() {
  return (
    <div className="container">
      <div className="cards">
        {apartments.map((apt) => (
          <div className="card" key={apt.id}>
            <div className="card-image">
              <img src={apt.cover} alt={apt.title} />
            </div>
            <div className="card-content">
              <h3>{apt.title}</h3>
              <p>{apt.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
