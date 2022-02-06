import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/usersActions";
import actionType from "../actions/usersActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onGetUserId() {
  yield takeEvery(actionType.GET_USER_ID_START, getUserIdSaga);
}

function* getUserIdSaga({ payload }) {
  try {
    const res = yield call(apiCalls.getUserId, payload);
    yield put(action.getUserIdSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(action.getUserIdError(err.response.data));
  }
}
