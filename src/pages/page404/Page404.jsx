import React from "react";
import { NavLink } from "react-router-dom";
import "./page404.scss";
const Page404 = () => {
  return (
    <div className="page404">
      <div className="body-404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default Page404;
