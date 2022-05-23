import React from "react";
// import PropTypes from "prop-types";
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

// Title.propTypes = {
//   name: PropTypes.string,
// };

export default Title;
