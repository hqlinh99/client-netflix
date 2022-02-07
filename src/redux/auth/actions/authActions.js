import actionType from "./authActionTypes";

//LOGIN
const loginUserStart = ({ email, password }) => ({
  type: actionType.LOGIN_USER_START,
  payload: { email, password },
});

const loginUserSuccess = (user) => ({
  type: actionType.LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserError = (errorMessage) => ({
  type: actionType.LOGIN_USER_ERROR,
  payload: errorMessage,
});

//LOGOUT
const logoutUserStart = ({ accessToken, userId, axiosPrivate }) => ({
  type: actionType.LOGOUT_USER_START,
  payload: { accessToken, userId, axiosPrivate },
});

const logoutUserSuccess = (user) => ({
  type: actionType.LOGOUT_USER_SUCCESS,
  payload: user,
});

const logoutUserError = (errorMessage) => ({
  type: actionType.LOGOUT_USER_ERROR,
  payload: errorMessage,
});

//CLEAR
const clearAuthStart = () => ({
  type: actionType.CLEAR_AUTH_START,
});

const usersActions = {
  loginUserStart,
  loginUserSuccess,
  loginUserError,
  logoutUserStart,
  logoutUserSuccess,
  logoutUserError,
  clearAuthStart,
};

export default usersActions;
