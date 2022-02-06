import actionType from "../actions/usersActionTypes";

const initialState = {
  isLoading: false,
  users: null,
  user: null,
  errorMessage: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    //LOGIN
    case actionType.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case actionType.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //LOGOUT
    case actionType.LOGOUT_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case actionType.LOGOUT_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //GET ID
    case actionType.GET_USER_ID_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_USER_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case actionType.GET_USER_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //CREATE
    case actionType.CREATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case actionType.CREATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        user: null,
      };

    //UPDATE
    case actionType.UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case actionType.UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //CLEAR
    case actionType.CLEAR_USER_START:
      return {
        ...state,
        user: null,
      };

    default:
      return { ...state };
  }
};

export default usersReducer;
