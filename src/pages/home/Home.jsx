import React from "react";
import "./home.scss";
import proteines from "../../assets/proteines.svg";

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
          <div className="db-activities">dfgs</div>
          <div className="db-small-charts">
            <div className="db-chart">section</div>
            <div className="db-chart">intensity</div>
            <div className="db-chart">score</div>
          </div>
        </div>
        <div className="db-key-data">
          <div className="db-key-info">
            <div className="db-key-img">
              <img src={proteines} alt="" />
            </div>
            <div className="db-key-text">
              <h2 className="db-key-title">1,930Kcal</h2>
              <p className="db-key-type">Calories</p>
            </div>
          </div>
          <div className="db-key-info">
            <div className="db-key-img">
              <img src={proteines} alt="" />
            </div>

            <div className="db-key-text">
              <h2 className="db-key-title">1,930Kcal</h2>
              <p className="db-key-type">Calories</p>
            </div>
          </div>
          <div className="db-key-info">
            <div className="db-key-img">
              <img src={proteines} alt="" />
            </div>

            <div className="db-key-text">
              <h2 className="db-key-title">1,930Kcal</h2>
              <p className="db-key-type">Calories</p>
            </div>
          </div>
          <div className="db-key-info">
            <div className="db-key-img">
              <img src={proteines} alt="" />
            </div>

            <div className="db-key-text">
              <h2 className="db-key-title">1,930Kcal</h2>
              <p className="db-key-type">Calories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
