import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/usersActions";
import actionType from "../actions/usersActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onCreateUser() {
  yield takeEvery(actionType.CREATE_USER_START, createUserSaga);
}

function* createUserSaga({ payload }) {
  try {
    const res = yield call(apiCalls.createUser, payload);
    yield put(action.createUserSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(action.createUserError(err.response.data));
  }
}
