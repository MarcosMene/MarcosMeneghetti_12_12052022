import React from "react";
import "./error.scss";

/**
 * @name Error
 * @description create error message if user not found.
 *@returns {JSX.Element}
 */

const Error = ({ error }) => {
  return (
    <div className="pageError">
      <div className="body-error">
        <h2>{error}</h2>
      </div>
    </div>
  );
};

export default Error;
