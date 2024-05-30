import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import signUpSlice from "../Slices/signUpSlice";
import authSlice from "../Slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
    signUp: signUpSlice,
  },
});
export default store;
