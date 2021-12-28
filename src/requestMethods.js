import axios from "axios";

const { API_FRONTEND_URL } = process.env;

export const userRequest = axios.create({
  base_URL: API_FRONTEND_URL,
});
