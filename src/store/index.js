"use client";
import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
// import { ClerkProvider } from "@clerk/clerk-react";
const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});

export default store;
