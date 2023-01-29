import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Chiemela</a>
        <div className="nav__menu"></div>
      </nav>
    </header>
  );
};

export default Header;
