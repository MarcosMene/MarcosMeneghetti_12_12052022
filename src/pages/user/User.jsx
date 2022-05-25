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
import Page404 from "../page404/Page404";

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

        //change format date yyyy-mm-dd from data to number 1 to 7
        for (let i = 0; i < response.data.sessions.length; i++) {
          response.data.sessions[i].day = i + 1;
        }

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
        const DataRadarFrench = response.data.data.map((data) => {
          switch (data.kind) {
            case 1:
              return { ...data, kind: "Cardio" };
            case 2:
              return { ...data, kind: "Energie" };
            case 3:
              return { ...data, kind: "Endurance" };
            case 4:
              return { ...data, kind: "Force" };
            case 5:
              return { ...data, kind: "Vitesse" };
            case 6:
              return { ...data, kind: "Intensité" };
            default:
              return { ...data };
          }
        });

        setDataPerformance(DataRadarFrench.reverse());

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

        //change format day 1 to letters Monday to Sunday
        const WeekLetters = response.data.sessions.map((data) => {
          switch (data.day) {
            case 1:
              return { ...data, day: "L" };
            case 2:
              return { ...data, day: "M" };
            case 3:
              return { ...data, day: "M" };
            case 4:
              return { ...data, day: "J" };
            case 5:
              return { ...data, day: "V" };
            case 6:
              return { ...data, day: "S" };
            case 7:
              return { ...data, day: "D" };
            default:
              return { ...data };
          }
        });
        console.log(WeekLetters);
        setDataSession(WeekLetters);
        console.log(response.data);
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
      <div className="main">
        <Page404 />
      </div>
    );
  }

  return (
    <div className="user">
      <Title name={data.userInfos.firstName} />
      <div className="db-dashboard">
        <div className="db-graphics">
          <div className="db-graphics-activities">
            <Activity activity={dataActivity.sessions} />
          </div>

          <div className="db-graphics-small-charts">
            <div className="db-chart">
              <Sessions session={dataSession} />
            </div>

            <div className="db-chart">
              <Performance performances={dataPerformance} />
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
    </div>
  );
};

export default Home;
