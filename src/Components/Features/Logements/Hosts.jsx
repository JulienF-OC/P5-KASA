import React from "react";
import "../../../Styles/Host.scss";

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host-name">{name}</p>
      <img className="host-picture" src={picture} alt={name} />
    </div>
  );
}

export default Host;
