import { takeEvery, call, put } from "redux-saga/effects";
import action from "../actions/listsActions";
import actionType from "../actions/listsActionTypes";
import apiCalls from "../../../server/apiCalls";

export default function* onGetListRandom() {
  yield takeEvery(actionType.GET_LISTS_RANDOM_START, getListsRandomSaga);
}

function* getListsRandomSaga({ payload }) {
  try {
    const res = yield call(apiCalls.getListsRandom, payload);
    yield put(action.getListsRandomSuccess(res.data));
  } catch (err) {
    console.error(err);
    yield put(action.getListsRandomError(err.response));
  }
}
