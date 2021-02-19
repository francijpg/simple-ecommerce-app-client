import axios from "axios";

export const apiCall = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
