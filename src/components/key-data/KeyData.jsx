import React from "react";
import PropTypes from "prop-types";

/**
 *
 * This is key-data component for the dashboard.
 * @param {imgElement} this is the image element
 * @param {backColor} this is the background color of element
 * @param {typeKey} this is the type of element
 * @param {texteKey} this is the texte key of element
 *
 * @returns {JSX Element}
 *
 */
const KeyData = ({ imgElement, backColor, typeKey, texteKey }) => {
  return (
    <div className="db-key-info ">
      <div className="db-key-img" style={{ backgroundColor: backColor }}>
        <img src={imgElement} alt="" />
      </div>
      <div className="db-key-text">
        <h2 className="db-key-title">{typeKey}</h2>
        <p className="db-key-type">{texteKey}</p>
      </div>
    </div>
  );
};

KeyData.propTypes = {
  imgElement: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  typeKey: PropTypes.string.isRequired,
  texteKey: PropTypes.string.isRequired,
};

export default KeyData;
