import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  auth: {
    name: "",
    isAuthenticated: false,
    role: "",
  },
};
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const response = await axios.get(" http://localhost:3000/userList");
  return response.data;
});

// Auth slice
const authSlice = createSlice({
  name: "auth/authSlice",
  initialState: initialState.auth,

  reducers: {
    login(state, action) {
      const { userName, password } = action.payload;
      if (userName === "admin" && password === "12345") {
        state.isAuthenticated = true;
        state.name = userName;
        state.role = "admin";
      } else {
        state.isAuthenticated = false;
        state.name = userName;
        state.role = "user";
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.errorMessage = "";
      state.role = "";
    },
  },
});

const { actions, reducer } = authSlice;
export const { login, logout } = actions;
export default reducer;
