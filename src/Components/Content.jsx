import React from "react";
import { Link } from "react-router-dom";
import "./Content.scss";
import apartments from "../data/logements.json";

function Content() {
  return (
    <div className="container">
      <div className="cards">
        {apartments.map((apt) => (
          <Link to={`/logement/${apt.id}`} key={apt.id} className="card-link">
            <div className="card">
              <img src={apt.cover} alt={apt.title} />
              <h3 className="card-title">{apt.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Content;
