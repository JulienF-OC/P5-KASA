import React from "react";
import "../../Styles/Navbar.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Accueil
      </NavLink>

      <NavLink
        to="/apropos"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        A Propos
      </NavLink>
    </nav>
  );
}

export default Navbar;
