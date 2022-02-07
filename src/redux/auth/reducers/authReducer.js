import actionType from "../actions/authActionTypes";
import { REHYDRATE } from "redux-persist";

const initialState = {
  isLoading: false,
  currentUser: null,
  errorMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        currentUser: action.payload?.authData?.currentUser,
      };

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
        currentUser: action.payload,
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
        currentUser: action.payload,
      };
    case actionType.LOGOUT_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //CLEAR
    case actionType.CLEAR_AUTH_START:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
