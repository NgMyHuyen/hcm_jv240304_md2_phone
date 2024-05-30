// src/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialAuthState = {
  isAuthenticated: false,
  errorMessage: "",
};

// Create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      if (username === "admin" && password === "12345") {
        state.isAuthenticated = true;
        state.errorMessage = "";
      } else {
        state.isAuthenticated = false;
        state.errorMessage = "Invalid username or password";
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.errorMessage = "";
    },
  },
});

export const authActions = authSlice.actions;
