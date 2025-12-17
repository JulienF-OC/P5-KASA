import React from "react";
import { Link } from "react-router-dom";
import "../../../Styles/Card.scss";

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} />
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
