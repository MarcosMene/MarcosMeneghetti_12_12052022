import React, { useState } from "react";
import "./home.scss";

import {
  getUserInfo,
  getActivities,
  getAverageSessions,
  getPerformance,
} from "../../Services/ApiCall";

import proteines from "../../assets/proteines.svg";
import glucides from "../../assets/apple.svg";
import lipides from "../../assets/cheeseburger.svg";
import calories from "../../assets/calories.svg";

import Activity from "../../components/Activity/Activity";
import Sessions from "../../components/sessions/Sessions";
import Performance from "../../components/performance/Performance";
import Score from "../../components/score/Score";
import KeyData from "../../components/key-data/KeyData";
import Title from "../../components/title/Title";

const Home = () => {
  //User data for the dashboard
  const [userData, setUserData] = useState({});
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [userDataError, setUserDataError] = useState(false);

  //

  return (
    <section className="home">
      <Title name="thomas" />

      <div className="db-dashboard">
        <div className="db-graphics">
          <div className="db-graphics-activities">
            <Activity />
          </div>

          <div className="db-graphics-small-charts">
            <div className="db-chart">
              <Sessions />
            </div>
            <div className="db-chart">
              <Performance />
            </div>
            <div className="db-chart">
              <Score />
            </div>
          </div>
        </div>
        <div className="db-key-data">
          <KeyData
            imgElement={calories}
            backColor={"#FBEAEA"}
            typeKey={"Calories"}
            valueKey={1.93}
          />
          <KeyData
            imgElement={proteines}
            backColor={"#E9F4FB"}
            typeKey={"Proteines"}
            valueKey={155}
          />
          <KeyData
            imgElement={glucides}
            backColor={"#FEFAE9"}
            typeKey={"Glucides"}
            valueKey={290}
          />
          <KeyData
            imgElement={lipides}
            backColor={"#FBEAEF"}
            typeKey={"Lipides"}
            valueKey={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
