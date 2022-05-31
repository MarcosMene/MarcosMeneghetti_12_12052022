import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Karl from "../../assets/users/Karl.png";
import Cecilia from "../../assets/users/Cecilia.png";

/**
 * @name Home
 * @description create home component for the page. It has two elements the id 12 and the id 18. They are a link that send you to the profile of the user.
 * @returns {JSX.Element}
 *
 */

const Home = () => {
  return (
    <div className="home">
      <h2>Select one user</h2>
      <div className="home-users">
        <Link to="/user/12" className="users-link">
          <div className="home-user">
            <img src={Karl} alt="profile Karl" className="user-image" />
            <p>Karl Dovineau</p>
          </div>
        </Link>
        <Link to="/user/18" className="users-link">
          <div className="home-user">
            <img src={Cecilia} alt="profile Cecilia" className="user-image" />
            <p>Cecilia Ratorez</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
