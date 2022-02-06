import actionType from "../actions/listsActionTypes";

const initialState = {
  isLoading: false,
  lists: null,
  list: null,
  errorMessage: null,
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET ALL
    case actionType.GET_LISTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_LISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case actionType.GET_LISTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //GET RANDOM
    case actionType.GET_LISTS_RANDOM_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_LISTS_RANDOM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lists: action.payload,
      };
    case actionType.GET_LISTS_RANDOM_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return { ...state };
  }
};

export default listsReducer;
