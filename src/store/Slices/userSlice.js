import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
//   await axios.delete(`http://localhost:3000/userList/${id}`);
//   return id;
// });

// Initial state
const initialState = {
  users: [],
  auth: {
    isAuthenticated: false,
    errorMessage: "",
    role: "", // Add this line
  },
};

// Auth slice
const authSlice = createSlice({
  name: "auth/authSlice",
  initialState: initialState.auth,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      if (username === "admin" && password === "12345") {
        state.isAuthenticated = true;
        state.errorMessage = "";
        state.role = "admin"; // Add this line
      } else {
        state.isAuthenticated = false;
        state.errorMessage = "Invalid username or password";
        state.role = "user"; // Add this line
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.errorMessage = "";
      state.role = ""; // Add this line
    },
  },
});

const { actions, reducer } = authSlice;
export const { login, logout } = actions;
export default reducer;
