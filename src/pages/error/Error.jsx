import React from "react";
import "./error.scss";

/** 
 * @name Error
 * @description create error message if user not found.
 *@returns {JSX.Element}
 */

const Error = () => {
  return (
    <div className="pageError">
      <div className="body-error">
        <h2>Utilisateur non reconnu</h2>
      </div>
    </div>
  );
};

export default Error;
