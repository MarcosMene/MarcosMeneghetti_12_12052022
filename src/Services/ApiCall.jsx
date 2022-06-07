import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../assets/mocked/mockedData";

const isMocked = process.env.REACT_APP_MOCKED_DATA;

//show if data mocked is true or false
console.log("Mocked =>", isMocked);

const api = axios.create({
  baseURL: "http://localhost:3000/user",
});

/**
 * @name getUserInfo
 *@description: This function is used to get the user details from the database. It makes request for a user with a given ID.
 * @param {number} id
 */

export const getUserInfo = async (id) => {
  try {
    if (isMocked === "true") {
      const response = {
        data: USER_MAIN_DATA.filter((e) => e.id === +id)[0],
      };
      // console.log("Mocked");
      return response;
    } else {
      // console.log("API");
      const response = await api.get(`/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    }

    // // console.log(isMocked);
    // // console.log("DATA MOCKED?", isMocked);
    // const response =
    //   isMocked === "true"
    //     ? {
    //         data: USER_MAIN_DATA.filter((e) => e.id === +id)[0],
    //       }
    //     : await api.get(`/${id}`);
    // console.log("response=>", response);
    // console.log("response=>", response.data);
    // console.log("response=>", response.data.data);
    // return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 *@description: This function is used to get the user activity from the database.It makes request for a user with a given ID.
 * @param {number} id
 */
export const getActivities = async (id) => {
  try {
    if (isMocked === "true") {
      const response = {
        data: USER_ACTIVITY.filter((e) => e.userId === +id)[0],
      };

      return response;
    } else {
      const response = await api.get(`/${id}/activity`);
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    }

    // // console.log("DATA MOCKED?", isMocked);
    // const response =
    //   isMocked === "true"
    //     ? {
    //         data: USER_ACTIVITY.filter((e) => e.userId === +id)[0],
    //       }
    //     : await api.get(`/${id}/activity`);
    // // console.log("response", response.data);
    // return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 *@description: This function is used to get the user session information from the database. It makes request for a user with a given ID.
 * @param {number} id
 */
export const getAverageSessions = async (id) => {
  try {
    if (isMocked === "true") {
      const response = {
        data: USER_AVERAGE_SESSIONS.filter((e) => e.userId === +id)[0],
      };

      return response;
    } else {
      const response = await api.get(`/${id}/average-sessions`);
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    }
    // // console.log("DATA MOCKED?", isMocked);
    // const response =
    //   isMocked === "true"
    //     ? {
    //         data: USER_AVERAGE_SESSIONS.filter((e) => e.userId === +id)[0],
    //       }
    //     : await api.get(`/${id}/average-sessions`);
    // // console.log("response", response.data);
    // return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 *@description: This function is used to get the user performance information from the database.It makes request for a user with a given ID.
 * @param {number} id
 *
 */
export const getPerformances = async (id) => {
  try {
    if (isMocked === "true") {
      const response = {
        data: USER_PERFORMANCE.filter((e) => e.userId === +id)[0],
      };

      return response;
    } else {
      const response = await api.get(`/${id}/performance`);
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    }
    // // console.log("DATA MOCKED?", isMocked);
    // const response =
    //   isMocked === "true"
    //     ? {
    //         data: USER_PERFORMANCE.filter((e) => e.userId === +id)[0],
    //       }
    //     : api.get(`/${id}/performance`);
    // // console.log(response);
    // // console.log(response.data);
    // return response;
  } catch (error) {
    console.log(error);
  }
};
