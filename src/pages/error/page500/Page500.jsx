import React from "react";
import { NavLink } from "react-router-dom";
import "./page500.scss";
const Error = () => {
  return (
    <div className="pageError500">
      <div className="body-error500">
        <h1>Erreur 500</h1>
        <p>
          C'est l'heure de la pause café. Le serveur devrait être de retour
          quand tu auras fini ton café.
        </p>
        <p className="link-return-500">
          Nous vous suggérons de
          <span>
            <NavLink to="/"> retourner</NavLink> sur la page d'accueil{" "}
          </span>
          ou visitez ici plus tard.
        </p>
      </div>
    </div>
  );
};

export default Error;
