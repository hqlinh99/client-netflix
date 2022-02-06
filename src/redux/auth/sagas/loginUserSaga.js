import { takeLatest, call, put } from "redux-saga/effects";
import action from "../actions/authActions";
import actionType from "../actions/authActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onLoginUser() {
  yield takeLatest(actionType.LOGIN_USER_START, loginUserSaga);
}

function* loginUserSaga({ payload }) {
  try {
    const res = yield call(apiCalls.loginUser, payload);
    yield put(action.loginUserSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(action.loginUserError(err.response.data));
  }
}
