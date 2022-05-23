import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./user.scss";

import {
  getUserInfo,
  getActivities,
  getPerformances,
  getAverageSessions,
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
  const [data, setData] = useState({});
  const [dataLoading, setDataLoding] = useState(false);
  const [dataError, setDataError] = useState(false);

  //user activities for the dashboard
  const [dataActivity, setDataActivity] = useState({});
  const [dataLoadingActivity, setDataLodingActivity] = useState(false);
  const [dataErrorActivity, setDataErrorActivity] = useState(false);

  //user perfomance for the dashboard
  const [dataPerformance, setDataPerformance] = useState({});
  const [dataLoadingPerformance, setDataLodingPerformance] = useState(false);
  const [dataErrorPerformance, setDataErrorPerformance] = useState(false);

  //user session for the dashboard
  const [dataSession, setDataSession] = useState({});
  const [dataLoadingSession, setDataLodingSession] = useState(false);
  const [dataErrorSession, setDataErrorSession] = useState(false);

  //get id from URL
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserInfo(id);
        setData(response.data);
        setDataLoding(true);
      } catch (error) {
        setDataError(true);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    const getActivity = async () => {
      try {
        const response = await getActivities(id);
        setDataActivity(response.data);
        setDataLodingActivity(true);
      } catch (error) {
        setDataErrorActivity(true);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    const getPerformance = async () => {
      try {
        const response = await getPerformances(id);
        setDataPerformance(response.data);
        setDataLodingPerformance(true);
      } catch (error) {
        setDataErrorPerformance(true);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    const getSession = async () => {
      try {
        const response = await getAverageSessions(id);
        setDataSession(response.data);
        setDataLodingSession(true);
      } catch (error) {
        setDataErrorSession(true);
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    getData();
    getActivity();
    getPerformance();
    getSession();
  }, [id]);

  //loading..Loading (or) and error message
  if (
    (!dataLoading ||
      !dataLoadingActivity ||
      !dataLoadingPerformance ||
      !dataLoadingSession) &&
    (!dataError ||
      !dataErrorActivity ||
      !dataErrorPerformance ||
      !dataErrorSession)
  ) {
    return <div className="loading">Loading...</div>;
  }
  // or
  if (
    dataError ||
    dataErrorActivity ||
    dataErrorPerformance ||
    dataErrorSession
  ) {
    return (
      <div className="dataNotFound">
        <h2>Data not found</h2>
      </div>
    );
  }

  return (
    <section className="user">
      <Title name={data.userInfos.firstName} />

      <div className="db-dashboard">
        <div className="db-graphics">
          <div className="db-graphics-activities">
            <Activity activity={dataActivity.sessions} />
          </div>

          <div className="db-graphics-small-charts">
            <div className="db-chart">
              <Sessions session={dataSession.sessions} />
            </div>
            <div className="db-chart">
              <Performance
                performance={dataPerformance.data.data}
                datakey={dataPerformance.data.data}
                kind={dataPerformance.data}
              />
            </div>
            <div className="db-chart">
              <Score
                score={
                  data.todayScore ? data.todayScore * 100 : data.score * 100
                }
              />
            </div>
          </div>
        </div>
        <div className="db-key-data">
          <KeyData
            imgElement={calories}
            backColor={"#FBEAEA"}
            typeKey={"Calories"}
            valueKey={data.keyData.calorieCount}
          />
          <KeyData
            imgElement={proteines}
            backColor={"#E9F4FB"}
            typeKey={"Proteines"}
            valueKey={data.keyData.proteinCount}
          />
          <KeyData
            imgElement={glucides}
            backColor={"#FEFAE9"}
            typeKey={"Glucides"}
            valueKey={data.keyData.carbohydrateCount}
          />
          <KeyData
            imgElement={lipides}
            backColor={"#FBEAEF"}
            typeKey={"Lipides"}
            valueKey={data.keyData.lipidCount}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
