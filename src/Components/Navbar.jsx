import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <Link to="/" className="accueil active">
        Accueil
      </Link>
      <a href="./A-propos.html" className="a-propos">
        A Propos
      </a>
    </nav>
  );
}

export default Navbar;
