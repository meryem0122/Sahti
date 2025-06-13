import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span>LOGO</span>
      </div>
      <div className="features">
        {/* <a href="#">Accueil</a> */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A propos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/prfile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to="/all-services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div class="dropdown">
            <span>Traitements et services ▾</span>
            <div className="dropdown-content">
              <Link to={"/overview"}>🔍 Overview ></Link>
              <Link to={"/all-services"}>📋 Tous les services ></Link>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
