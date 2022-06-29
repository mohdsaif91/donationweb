import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { donationService } from "../../apiCall/donationService";
import { loadingIndicator } from "./utilSlice";

export const createDonation = createAsyncThunk(
  "donationSlice/createDonation",
  (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(loadingIndicator(true));
      const res = donationService.createDonationApi(data);
      dispatch(loadingIndicator(false));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllDonationMethod = createAsyncThunk(
  "donationSlice/getAllDonation",
  (data, { dispatch, fulfillWithValue, rejectWithValue }) => {
    try {
      dispatch(loadingIndicator(true));
      return donationService.getAllDonationApi().then((res) => {
        if (res.status === 200) {
          return fulfillWithValue(res.data);
        }
        if (res.status === 401 || res.status === 404) {
          return rejectWithValue(res.data.error);
        }
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const donationSlice = createSlice({
  name: "donationSlice",
  initialState: {},
  extraReducers: {
    [createDonation.fulfilled]: (state, action) => {},
    [createDonation.rejected]: (state, action) => {},
    [getAllDonationMethod.fulfilled]: (state, action) => {
      return {
        ...state,
        error: false,
        donation: action.payload,
      };
    },
    [getAllDonationMethod.rejected]: (state, action) => {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    },
  },
});

const { reducer } = donationSlice;

export default reducer;
