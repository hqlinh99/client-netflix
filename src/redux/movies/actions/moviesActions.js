import actionType from "./moviesActionTypes";

//GET ID MOVIE
const getMovieIdStart = (movieId) => ({
  type: actionType.GET_MOVIE_ID_START,
  payload: movieId,
});

const getMovieIdSuccess = (movie) => ({
  type: actionType.GET_MOVIE_ID_SUCCESS,
  payload: movie,
});

const getMovieIdError = (errorMessage) => ({
  type: actionType.GET_MOVIE_ID_ERROR,
  payload: errorMessage,
});

//GET ALL MOVIE
const getMoviesStart = (data) => ({
  type: actionType.GET_MOVIES_START,
  payload: data,
});

const getMoviesSuccess = (movies) => ({
  type: actionType.GET_MOVIES_SUCCESS,
  payload: movies,
});

const getMoviesError = (errorMessage) => ({
  type: actionType.GET_MOVIES_ERROR,
  payload: errorMessage,
});

//GET RANDOM MOVIE
const getMovieRandomStart = ({ type, accessToken, axiosPrivate }) => ({
  type: actionType.GET_MOVIE_RANDOM_START,
  payload: { type, accessToken, axiosPrivate },
});

const getMovieRandomSuccess = (movie) => ({
  type: actionType.GET_MOVIE_RANDOM_SUCCESS,
  payload: movie,
});

const getMovieRandomError = (errorMessage) => ({
  type: actionType.GET_MOVIE_RANDOM_ERROR,
  payload: errorMessage,
});

const moviesActions = {
  getMovieIdStart,
  getMovieIdSuccess,
  getMovieIdError,
  getMovieRandomStart,
  getMovieRandomSuccess,
  getMovieRandomError,
  getMoviesStart,
  getMoviesSuccess,
  getMoviesError,
};

export default moviesActions;
