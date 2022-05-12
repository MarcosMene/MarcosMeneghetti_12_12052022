import React from "react";
import running from "../../assets/running.svg";
import sportsee from "../../assets/sportsee.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-image1" src={running} alt="logo" />
        <img className="logo-image2" src={sportsee} alt="sport see" />
      </div>
      <nav className="navigation">
        <ul className="nav">
          <li className="nav-item">Accueil</li>
          <li className="nav-item">Profil</li>
          <li className="nav-item">Réglage</li>
          <li className="nav-item">Communauté</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
