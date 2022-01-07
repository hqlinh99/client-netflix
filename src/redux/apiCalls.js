import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "../redux/userRedux";
import { userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

export const logout = async (dispatch, data) => {
  dispatch(logoutStart());
  try {
    const res = await userRequest.get(`/auth/logout/${data.userId}`, {
      headers: { token: data.accessToken },
    });
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure(err.response.data));
  }
};
