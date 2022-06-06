import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../../apiCall/loginService";

import { loadingIndicator } from "./utilSlice";

export const loginAdmin = createAsyncThunk(
  "adminSlice/adminLogin",
  (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(loadingIndicator(true));
      const res = loginService.login(data);
      dispatch(loadingIndicator(false));
      return res;
    } catch (error) {
      dispatch(loadingIndicator(false));
      return rejectWithValue;
    }
  }
);

export const adminSignup = createAsyncThunk(
  "adminnSlice/adminSignup",
  (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(loadingIndicator(true));
      const res = loginService.signUp(data);
      dispatch(loadingIndicator(false));
      return res;
    } catch (error) {
      dispatch(loadingIndicator(false));
    }
  }
);

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    adminState: sessionStorage.getItem("adminData")
      ? JSON.parse(sessionStorage.getItem("adminData"))
      : { adminLogin: false },
  },
  reducers: {
    logoutAdmin: (state, action) => {
      return {
        ...state,
        adminState: {
          adminLogin: false,
        },
      };
    },
  },
  extraReducers: {
    [loginAdmin.fulfilled]: (state, action) => {
      sessionStorage.setItem("adminData", JSON.stringify({ adminLogin: true }));
      return {
        ...state,
        adminState: { adminLogin: true },
      };
    },
    [loginAdmin.rejected]: (state, action) => {
      return {
        ...state,
        adminState: { adminLogin: false },
      };
    },
  },
});

export const { logoutAdmin } = adminSlice.actions;
const { reducer } = adminSlice;
export default reducer;
