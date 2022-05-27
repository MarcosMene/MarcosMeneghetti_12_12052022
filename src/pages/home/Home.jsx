import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Karl from "../../assets/users/Karl.png";
import Cecilia from "../../assets/users/Cecilia.png";
const Home = () => {
  return (
    <div className="home">
      <h2>Select one user</h2>
      <div className="home-users">
        <Link to="/user/12" className="users-link">
          <div className="home-user">
            <img src={Karl} alt="Karl" className="user-image" />
            <p>Karl Dovineau</p>
          </div>
        </Link>
        <Link to="/user/18" className="users-link">
          <div className="home-user">
            <img src={Cecilia} alt="Cecilia" className="user-image" />
            <p>Cecilia Ratorez</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
