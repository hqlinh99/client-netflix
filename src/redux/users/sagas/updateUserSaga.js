import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/usersActions";
import actionType from "../actions/usersActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onUpdateUser() {
  yield takeEvery(actionType.UPDATE_USER_START, updateUserSaga);
}

function* updateUserSaga({ payload }) {
  try {
    const res = yield call(apiCalls.updateUser, payload);
    if (res.status === 200) {
      yield put(action.updateUserSuccess(res.data));
    }
  } catch (err) {
    console.error(err);
    yield put(action.updateUserError(err.response.data));
  }
}
