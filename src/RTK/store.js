import { configureStore } from "@reduxjs/toolkit";

import utilSlice from "./Slice/utilSlice";
import adminSlice from "./Slice/adminSlice";

const reducer = {
  util: utilSlice,
  admin: adminSlice,
};

export const store = configureStore({
  reducer,
  devTools: true,
});
