import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/moviesActions";
import actionType from "../actions/moviesActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onGetMovieRandom() {
  yield takeEvery(actionType.GET_MOVIE_RANDOM_START, getMovieRandomSaga);
}

function* getMovieRandomSaga({ payload }) {
  try {
    const res = yield call(apiCalls.getMovieRandom, payload);
    yield put(action.getMovieRandomSuccess(res.data[0]));
  } catch (err) {
    console.error(err);
    yield put(action.getMovieRandomError(err.response));
  }
}
