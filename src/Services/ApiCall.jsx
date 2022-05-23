import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/user",
});

/**
 *
 * @param {number} id
 * @returns
 */

export const getUserInfo = async (id) => {
  try {
    const response = await api.get(`/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActivities = async (id) => {
  try {
    const response = await api.get(`/${id}/activity`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAverageSessions = async (id) => {
  try {
    const response = await api.get(`/${id}/average-sessions`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPerformances = async (id) => {
  try {
    const response = await api.get(`/${id}/performance`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
