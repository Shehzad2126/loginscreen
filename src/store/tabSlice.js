// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   activeTab: "Dashboard", // Default tab
// };

// const tabSlice = createSlice({
//   name: "tab",
//   initialState,
//   reducers: {
//     setActiveTab(state, action) {
//       state.activeTab = action.payload;
//     },
//   },
// });

// export const { setActiveTab } = tabSlice.actions;

// export default tabSlice.reducer;
// store/tabSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "Dashboard", // Default tab
  isCollapsed: false, // Sidebar starts collapsed
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    toggleSidebar(state) {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { setActiveTab, toggleSidebar } = tabSlice.actions;

export default tabSlice.reducer;
