import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    //Login
    loginStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = action.payload;
    },

    //Logout
    logoutStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = userSlice.actions;
export default userSlice.reducer;
