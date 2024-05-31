import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/userList",
        newUser
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  userList: [],
  status: "idle",
  error: null,
};

const signUpSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = "succeeded";
      // Thêm người dùng vào danh sách userList
      state.userList.push(action.payload);
    });
    builder.addCase(signUp.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

const { actions, reducer } = signUpSlice;
export const {} = actions;
export default reducer;
