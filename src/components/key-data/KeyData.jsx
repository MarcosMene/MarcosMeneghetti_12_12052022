import React from "react";
import PropTypes from "prop-types";
import "./keyData.scss";
/**
 *@name KeyData
 * @description create key-data component for the dashboard.It has 3 values: background-color, typekey and valueKey;
 *
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
    <div className="db-key-info">
      <div className="db-key-img" style={{ backgroundColor: backColor }}>
        <img src={imgElement} alt={typeKey} />
      </div>
      <div className="db-key-text">
        <h2 className="db-key-title">
          {valueKey.toLocaleString("en-US")} {/* format number */}
          {typeKey === "Calories" ? <span>Kcal</span> : <span>g</span>}
        </h2>
        <p className="db-key-type">{typeKey}</p>
      </div>
    </div>
  );
};

//proptypes for keyData
KeyData.propTypes = {
  imgElement: PropTypes.string,
  backColor: PropTypes.string,
  valueKey: PropTypes.number,
  typeKey: PropTypes.string,
};

export default KeyData;
