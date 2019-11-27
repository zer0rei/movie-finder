import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import logo from "../../assets/logo.svg";

function Header({ onLogoClick }) {
  return (
    <header className="header">
      <div className="header__logo-container" onClick={onLogoClick}>
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__title">React Movies</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onLogoClick: PropTypes.func
};

export default Header;
