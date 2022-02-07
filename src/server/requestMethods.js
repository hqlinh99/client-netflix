import axios from "axios";
import action from "../redux/auth/actions/authActions";
import jwt_decode from "jwt-decode";
import { store } from "../redux/store";

const { REACT_APP_API_URL } = process.env;

export const axiosPublic = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: REACT_APP_API_URL,
});

const refreshToken = async () => {
  try {
    const res = await axiosPublic.post("/auth/refresh-token");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

axiosPrivate.interceptors.request.use(
  async (config) => {
    const { currentUser } = store?.getState()?.authData;
    let date = new Date();
    const decodedToken = jwt_decode(currentUser?.accessToken);
    if (decodedToken.exp < date.getTime() / 1000) {
      const data = await refreshToken();
      const refreshUser = {
        ...currentUser,
        accessToken: data.accessToken,
      };
      await store.dispatch(action.loginUserSuccess(refreshUser));
      config.headers["token"] = data.accessToken;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
