import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/authActions";
import actionType from "../actions/authActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onLogoutUser() {
  yield takeEvery(actionType.LOGOUT_USER_START, logoutUserSaga);
}

function* logoutUserSaga({ payload }) {
  try {
    const res = yield call(apiCalls.logoutUser, payload);
    yield put(action.logoutUserSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(action.logoutUserError(err.response.data));
  }
}
