import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./user.scss";

import {
  getUserInfo,
  getActivities,
  getPerformances,
  getAverageSessions,
} from "../../Services/ApiCall";

import {
  userDataModel,
  userDataActivityModel,
  userDataPerformanceModel,
  userDataAverangeSessiosModel,
} from "../../Services/UserDataModel";

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
import Error from "../error/Error";

const User = () => {
  //User data for the dashboard
  const [data, setData] = useState({});
  const [dataLoading, setDataLoding] = useState(false);

  const [dataMessage, setDataMessage] = useState("");

  //user activities for the dashboard
  const [dataActivity, setDataActivity] = useState({});
  const [dataLoadingActivity, setDataLodingActivity] = useState(false);

  //user perfomance for the dashboard
  const [dataPerformance, setDataPerformance] = useState({});
  const [dataLoadingPerformance, setDataLodingPerformance] = useState(false);

  //user session for the dashboard
  const [dataSession, setDataSession] = useState({});
  const [dataLoadingSession, setDataLodingSession] = useState(false);

  //get id from URL
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserInfo(id);

        response === null
          ? setDataMessage("Connexion internet non disponible.")
          : setDataMessage("Identifiant non reconnu");

        const formattedUserData = new userDataModel(response.data);
        console.log(formattedUserData);
        setData(formattedUserData);
        setDataLoding(true);
      } catch (error) {
        if (error.response) {
          setDataMessage(error.message);
        }
      }
    };

    /**
     *@name getActivity
     *@param {number} id
     *@returns {Object}
     */

    const getActivity = async () => {
      try {
        const response = await getActivities(id);
        // if (response === undefined) {
        //   return <div className="user">{dataMessage}</div>;
        // }

        const formattedUserDataActivity = new userDataActivityModel(
          response.data
        );

        setDataActivity(formattedUserDataActivity);
        setDataLodingActivity(true);
      } catch (error) {
        if (error.response) {
          setDataMessage(error.message);
        }
      }
    };

    /**
     *@name getPerformance
     *@param {number} id
     *@returns {object}
     */
    const getPerformance = async () => {
      try {
        const response = await getPerformances(id);

        const formattedUserDataPerformance = new userDataPerformanceModel(
          response.data
        );
        console.log(formattedUserDataPerformance);
        if (response === undefined) {
          return <div className="user">{dataMessage}</div>;
        }

        /**
         *@name DataRadarFrench
         *@param {number} id
         *@returns {Array}
         */

        const DataRadarFrench = formattedUserDataPerformance.data.map(
          (data) => {
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
          }
        );

        setDataPerformance(DataRadarFrench.reverse());
        setDataLodingPerformance(true);
      } catch (error) {
        if (error.response) {
          setDataMessage(error.message);
        }
      }
    };

    /**
     * @name getSession
     *@param {number} id
     *@returns {Object}
     */

    const getSession = async () => {
      try {
        const response = await getAverageSessions(id);

        const formattedUserDataAverageSessions =
          new userDataAverangeSessiosModel(response.data);

        // if (response === undefined) {
        //   return <div className="user">{dataMessage}</div>;
        // }

        /**
         * @name WeekLetters
         *@param {number} id
         *@returns {Array}
         */

        //change format day 1 to letters Monday to Sunday
        const WeekLetters = formattedUserDataAverageSessions.sessions.map(
          (data) => {
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
          }
        );
        setDataSession(WeekLetters);
        setDataLodingSession(true);
      } catch (error) {
        if (error.response) {
          setDataMessage(error.message);
        }
      }
    };
    getData();
    getActivity();
    getPerformance();
    getSession();
  }, [dataMessage, id]);

  //user not found message
  if (
    !dataLoading ||
    !dataLoadingActivity ||
    !dataLoadingPerformance ||
    !dataLoadingSession
  ) {
    return <Error error={dataMessage} />;
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
              <Score score={data.todayScore * 100} />
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

export default User;
