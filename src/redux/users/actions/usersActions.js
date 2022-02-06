import actionType from "./usersActionTypes";

//GET ID
const getUserIdStart = ({ _id, accessToken, axiosPrivate }) => ({
  type: actionType.GET_USER_ID_START,
  payload: { _id, accessToken, axiosPrivate },
});

const getUserIdSuccess = (user) => ({
  type: actionType.GET_USER_ID_SUCCESS,
  payload: user,
});

const getUserIdError = (errorMessage) => ({
  type: actionType.GET_USER_ID_ERROR,
  payload: errorMessage,
});

//CREATE
const createUserStart = ({ email, username, password }) => ({
  type: actionType.CREATE_USER_START,
  payload: { email, username, password },
});

const createUserSuccess = (user) => ({
  type: actionType.CREATE_USER_SUCCESS,
  payload: user,
});

const createUserError = (errorMessage) => ({
  type: actionType.CREATE_USER_ERROR,
  payload: errorMessage,
});

//UPDATE
const updateUserStart = ({ accessToken }) => ({
  type: actionType.UPDATE_USER_START,
  payload: { accessToken },
});

const updateUserSuccess = (newUser) => ({
  type: actionType.UPDATE_USER_SUCCESS,
  payload: newUser,
});

const updateUserError = (errorMessage) => ({
  type: actionType.UPDATE_USER_ERROR,
  payload: errorMessage,
});

//CLEAR
const clearUserStart = () => ({
  type: actionType.CLEAR_USER_START,
});

const usersActions = {
  getUserIdStart,
  getUserIdSuccess,
  getUserIdError,
  updateUserStart,
  updateUserSuccess,
  updateUserError,
  createUserStart,
  createUserSuccess,
  createUserError,
  clearUserStart,
};

export default usersActions;
