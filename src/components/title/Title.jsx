import React from "react";
import "./title.scss";

const Title = ({ name }) => {
  return (
    <div className="greetting">
      <h1 className="greeting-title">
        Bonjour<span className="greeting-user">{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Title;
