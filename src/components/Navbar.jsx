import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavLink
            className={({ isActive }) => {
              return !isActive ? "navBtn" : "navBtn navBtnActive";
            }}
            to="/"
          >
            Employee
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return !isActive ? "navBtn" : "navBtn navBtnActive";
            }}
            to="/component"
          >
            Components
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
