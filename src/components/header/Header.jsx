import React from "react";
import { NavLink } from "react-router-dom";
import running from "../../assets/logo.png";
import "./header.scss";
import PropTypes from "prop-types";

/**
 * @name Header
 * @description create header component for the page.
 * @param {symbol} running is the image of logo
 * @returns {JSX.Element}
 */

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image" src={running} alt="logo" />
      </div>
      <nav className="navigation">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/">Accueil </NavLink>
          </li>
          <li className="nav-item">Profil</li>
          <li className="nav-item">Réglage</li>
          <li className="nav-item">Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

//proptypes for header
Header.propTypes = {
  running: PropTypes.string,
};

export default Header;
