import actionType from "./listsActionTypes";

//GET RANDOM MOVIE
const getListsRandomStart = ({ type, genre, accessToken, axiosPrivate }) => ({
  type: actionType.GET_LISTS_RANDOM_START,
  payload: { type, genre, accessToken, axiosPrivate },
});

const getListsRandomSuccess = (list) => ({
  type: actionType.GET_LISTS_RANDOM_SUCCESS,
  payload: list,
});

const getListsRandomError = (errorMessage) => ({
  type: actionType.GET_LISTS_RANDOM_ERROR,
  payload: errorMessage,
});

const listsActions = {
  getListsRandomStart,
  getListsRandomSuccess,
  getListsRandomError,
};

export default listsActions;
