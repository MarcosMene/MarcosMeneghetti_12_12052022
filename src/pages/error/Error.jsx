import React from "react";
import { NavLink } from "react-router-dom";
import "./error.scss";
const Error = () => {
  return (
    <div className="pageError">
      <div className="body-error">
        <h2>Utilisateur non retrouvé</h2>
      </div>
    </div>
  );
};

export default Error;
