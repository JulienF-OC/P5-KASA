import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <a href="./index.html" className="accueil active">
        Accueil
      </a>
      <a href="./A-propos.html" className="a-propos">
        A Propos
      </a>
    </nav>
  );
}

export default Navbar;
