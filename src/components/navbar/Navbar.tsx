import React from "react";
import "./navbar.scss";
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          ClickBlitz
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item active">
            Home
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
