import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./index";
import * as authSagas from "./auth/sagas";
import * as userSagas from "./users/sagas";
import * as movieSagas from "./movies/sagas";
import * as listSagas from "./lists/sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware =
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    : applyMiddleware(sagaMiddleware);

export let store = createStore(persistedReducer, middleware);
export let persistor = persistStore(store);

sagaMiddleware.run(authSagas.loginUserSaga);
sagaMiddleware.run(authSagas.logoutUserSaga);
sagaMiddleware.run(userSagas.getUserIdSaga);
sagaMiddleware.run(userSagas.createUserSaga);
sagaMiddleware.run(userSagas.updateUserSaga);
sagaMiddleware.run(movieSagas.getMoviesSaga);
sagaMiddleware.run(movieSagas.getMovieRandomSaga);
sagaMiddleware.run(listSagas.getListsRandomSaga);
