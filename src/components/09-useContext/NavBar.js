import React from "react";
import { Link as NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-light">
      <NavLink exact="true" className="nav-item nav-link" to="/">
        Home
      </NavLink>
      <NavLink exact="true" className="nav-item nav-link" to="/about">
        About
      </NavLink>
      <NavLink exact="true" className="nav-item nav-link " to="/login">
        Login
      </NavLink>
    </nav>
  );
};
