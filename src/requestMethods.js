import axios from "axios";

const { API_URL } = process.env;

export const userRequest = axios.create({
  base_URL: API_URL,
});
