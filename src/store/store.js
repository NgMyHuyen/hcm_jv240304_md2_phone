import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../store/Slices/signUpSlice";
import authSLice from "../store/Slices/userSlice";

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    auth: authSLice,
    // user: userSlice,
  },
});

export default store;
