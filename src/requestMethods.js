import axios from "axios";

const { API_URL } = process.env;
console.log(API_URL)

export const userRequest = axios.create({
  base_URL: API_URL,
});
