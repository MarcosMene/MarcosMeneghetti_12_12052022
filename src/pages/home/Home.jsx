import React from "react";
import "./home.scss";
import proteines from "../../assets/proteines.svg";
import glucides from "../../assets/apple.svg";
import lipides from "../../assets/cheeseburger.svg";
import calories from "../../assets/calories.svg";
import Activity from "../../components/Activity/Activity";
import Sessions from "../../components/sessions/Sessions";
import Performance from "../../components/performance/Performance";
import Score from "../../components/score/Score";
import KeyData from "../../components/key-data/KeyData";
const Home = () => {
  return (
    <section className="home">
      <div className="greetting">
        <h1 className="greeting-title">
          Bonjour<span className="greeting-user">Thomas</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="db-dashboard">
        <div className="db-graphics">
          <Activity className="db-activities" />

          <div className="db-small-charts">
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
            texteKey={"1,930Kcal"}
          />
          <KeyData
            imgElement={proteines}
            backColor={"#E9F4FB"}
            typeKey={"Proteines"}
            texteKey={"155g"}
          />
          <KeyData
            imgElement={glucides}
            backColor={"#FEFAE9"}
            typeKey={"Glucides"}
            texteKey={"290g"}
          />
          <KeyData
            imgElement={lipides}
            backColor={"#FBEAEF"}
            typeKey={"Lipides"}
            texteKey={"50g"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
