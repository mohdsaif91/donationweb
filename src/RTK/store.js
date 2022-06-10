import { configureStore } from "@reduxjs/toolkit";

import utilSlice from "./Slice/utilSlice";
import adminSlice from "./Slice/adminSlice";
import donationSlice from "./Slice/donationSlice";

const reducer = {
  util: utilSlice,
  admin: adminSlice,
  donation: donationSlice,
};

export const store = configureStore({
  reducer,
  devTools: true,
});
