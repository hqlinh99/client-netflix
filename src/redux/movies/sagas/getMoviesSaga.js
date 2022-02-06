import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/moviesActions";
import actionType from "../actions/moviesActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onGetMovies() {
  yield takeEvery(actionType.GET_MOVIES_START, getMoviesSaga);
}

function* getMoviesSaga({ payload }) {
  try {
    const res = yield call(apiCalls.getMovies, payload);
    yield put(action.getMoviesSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(action.getMoviesError(err.response.data));
  }
}
