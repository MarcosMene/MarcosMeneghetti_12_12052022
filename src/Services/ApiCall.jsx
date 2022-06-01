import axios from "axios";

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
    const response = await api.get(`/${id}`);
    return response.data;
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
    const response = await api.get(`/${id}/activity`);
    return response.data;
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
    const response = await api.get(`/${id}/average-sessions`);
    return response.data;
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
    const response = await api.get(`/${id}/performance`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
