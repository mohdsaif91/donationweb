import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  name: "util",
  initialState: { loading: false },
  reducers: {
    loadingIndicator: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { loadingIndicator } = utilSlice.actions;
const { reducer } = utilSlice;

export default reducer;
