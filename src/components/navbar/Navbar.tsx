import React from "react";
import "./navbar.scss";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          ClickBlitz
        </a>
        <div className="navbar-menu">
          <a href="/" className="navbar-item active">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
