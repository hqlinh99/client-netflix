import authReducer from "./auth/reducers/authReducer";
import usersReducer from "./users/reducers/usersReducer";
import moviesReducer from "./movies/reducers/moviesReducer";
import listsReducer from "./lists/reducers/listsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authData: authReducer,
  userData: usersReducer,
  movieData: moviesReducer,
  listData: listsReducer,
});

export default rootReducer;
