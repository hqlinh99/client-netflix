import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userRedux";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
