import React from "react";
import "./sideMenu.scss";
import yoga from "../../assets/yoga.svg";
import swimming from "../../assets/swim.svg";
import bicycle from "../../assets/bicycle.svg";
import alter from "../../assets/alters.svg";
/**
 *
 * @returns {JSX.Element}
 */
const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="sideMenu-header">
        <div className="sideMenu-button">
          <img src={yoga} alt="yoga button" />
        </div>
        <div className="sideMenu-button">
          <img src={swimming} alt="yoga button" />
        </div>
        <div className="sideMenu-button">
          <img src={bicycle} alt="yoga button" />
        </div>
        <div className="sideMenu-button">
          <img src={alter} alt="yoga button" />
        </div>
      </div>
      <div className="sideMenu-copyright">Copyright, SportSee 2022</div>
    </div>
  );
};

export default SideMenu;
