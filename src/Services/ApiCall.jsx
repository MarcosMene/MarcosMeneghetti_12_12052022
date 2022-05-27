import axios from "axios";
import Error from "../pages/error/Error";

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

    <Error />;
  }
};

export const getActivities = async (id) => {
  try {
    const response = await api.get(`/${id}/activity`);

    return response.data;
  } catch (error) {
    console.log(error);
    <Error />;
  }
};
export const getAverageSessions = async (id) => {
  try {
    const response = await api.get(`/${id}/average-sessions`);

    return response.data;
  } catch (error) {
    console.log(error);
    <Error />;
  }
};
export const getPerformances = async (id) => {
  try {
    const response = await api.get(`/${id}/performance`);

    return response.data;
  } catch (error) {
    console.log(error);
    <Error />;
  }
};
