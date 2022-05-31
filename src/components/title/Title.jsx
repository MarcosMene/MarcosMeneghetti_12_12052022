import React from "react";
import PropTypes from "prop-types";
import "./title.scss";

/**
 *@name Title greeting
 @description create title component for the page. It has the name of id person.
 * @param {string} name
 * @returns {JSX.Element}
 */

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

//proptypes for title
Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
