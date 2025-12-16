import React from "react";
import "./Error404.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-content">
      <span className="error-nbr">404</span>
      <span className="error-msg">
        Oups ! La page que <br className="mobile-break" /> vous demandez
        n'existe pas !
      </span>
      <Link to="/" className="home-page">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
