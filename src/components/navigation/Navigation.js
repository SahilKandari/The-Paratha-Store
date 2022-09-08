import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function Navigation() {
  return (
    <div className="navigation_section">
      <div className="navigation_heading">
        <img
          alt="store"
          src="https://static.wixstatic.com/media/f9d5bf_d1ce4c35a5ec4e98a64c9be5ddbe4113~mv2.png/v1/fill/w_2500,h_2500,al_c/f9d5bf_d1ce4c35a5ec4e98a64c9be5ddbe4113~mv2.png"
        />

        <h2> The paratha store</h2>
      </div>
      <div className="navigation_navbar">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#FF6961" : "" };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#FF6961" : "" };
              }}
              to="menu"
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#FF6961" : "" };
              }}
              to="cart"
            >
              <LocalMallIcon />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
