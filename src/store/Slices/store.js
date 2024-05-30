import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { authActions } from "./User.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authActions,
  },
});
export default store;
