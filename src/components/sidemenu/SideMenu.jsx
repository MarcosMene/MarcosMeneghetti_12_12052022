import React from "react";
import "./sideMenu.scss";
import yoga from "../../assets/yoga.svg";
import swimming from "../../assets/swim.svg";
import bicycle from "../../assets/bicycle.svg";
import alter from "../../assets/alters.svg";
import PropTypes from "prop-types";

/**
 * @name SideMenu
 * @description create sidemenu component for the page. It has 4 buttons, but for this project they are disabled.
 * @param {string} yoga - button
 * @param {string} swimming- button
 * @param {string} bicycle- button
 * @param {string} alter- button
 * @returns {JSX.Element}
 *
 */

const SideMenu = () => {
  return (
    <aside className="sideMenu">
      <div className="sideMenu-header">
        <div className="sideMenu-button">
          <img src={yoga} alt="yoga button" />
        </div>
        <div className="sideMenu-button">
          <img src={swimming} alt="swimming button" />
        </div>
        <div className="sideMenu-button">
          <img src={bicycle} alt="bicycle button" />
        </div>
        <div className="sideMenu-button">
          <img src={alter} alt="alter button" />
        </div>
      </div>
      <div className="sideMenu-copyright">Copyright, SportSee 2022</div>
    </aside>
  );
};

SideMenu.propTypes = {
  yoga: PropTypes.string,
  swimming: PropTypes.string,
  bicycle: PropTypes.string,
  alter: PropTypes.string,
};

export default SideMenu;
