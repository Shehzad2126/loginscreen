"use client";
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    tab: tabReducer,
    auth: authReducer,
  },
});

export default store;
