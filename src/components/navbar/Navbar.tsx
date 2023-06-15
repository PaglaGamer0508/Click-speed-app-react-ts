import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/click-logo.svg";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div id="name-logo">
          <img src={Logo} alt="" />
          <Link to="/" className="navbar-brand">
            ClickBlitz
          </Link>
        </div>
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
