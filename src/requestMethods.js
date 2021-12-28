import axios from "axios";

const BASE_URL = "https://netflix-hqlinh.herokuapp.com/api/";

export const userRequest = axios.create({
  base_URL: BASE_URL
});
