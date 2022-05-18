import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @description create key-data component for the dashboard.
 * @param {string} imgElement is the image element
 * @param {string} backColor is the background color of element
 * @param {string} typeKey is the type of element
 * @param {number} valueKey is the value key of element
 *
 * @returns {JSX.Element}
 *
 */
const KeyData = ({ imgElement, backColor, typeKey, valueKey }) => {
  return (
    <div className="db-key-info ">
      <div className="db-key-img" style={{ backgroundColor: backColor }}>
        <img src={imgElement} alt={typeKey} />
      </div>
      <div className="db-key-text">
        <h2 className="db-key-title">
          {valueKey}
          {typeKey === "Calories" ? <span>Kcal</span> : <span>g</span>}
        </h2>
        <p className="db-key-type">{typeKey}</p>
      </div>
    </div>
  );
};

KeyData.propTypes = {
  imgElement: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  typeKey: PropTypes.string.isRequired,
  valueKey: PropTypes.number.isRequired,
};

export default KeyData;