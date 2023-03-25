import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesData: [],
};

const dataSlice = createSlice({
  name: "WatchedList",
  initialState,
  reducers: {
    addToWatchedList(state, action) {
      state.moviesData.push(action.payload);
    },
    removeFromWatchedList(state, action) {
      const listItem = state.moviesData.filter(
        (item) => item.id !== action.payload.id
      );
      state.moviesData = listItem;
    },
  },
});

export const { addToWatchedList, removeFromWatchedList } = dataSlice.actions;
export default dataSlice.reducer;
