import actionType from "../actions/moviesActionTypes";

const initialState = {
  isLoading: false,
  movies: null,
  movie: null,
  random: null,
  errorMessage: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET ALL
    case actionType.GET_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case actionType.GET_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //GET ID
    case actionType.GET_MOVIE_ID_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_MOVIE_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
      };
    case actionType.GET_MOVIE_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    //GET RANDOM
    case actionType.GET_MOVIE_RANDOM_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_MOVIE_RANDOM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        random: action.payload,
      };
    case actionType.GET_MOVIE_RANDOM_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
