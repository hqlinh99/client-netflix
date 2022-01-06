import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const userRequest = axios.create({
  baseURL: REACT_APP_API_URL,
});
