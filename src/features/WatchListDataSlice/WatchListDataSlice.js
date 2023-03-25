import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesData: [],
};

const dataSlice = createSlice({
  name: "WatchList",
  initialState,
  reducers: {
    addToWathList(state, action) {
      state.moviesData.push(action.payload);
    },
    removeFromWatchList(state, action) {
      const listItem = state.moviesData.filter(
        (item) => item.id !== action.payload.id
      );
      state.moviesData = listItem;
    },
  },
});

export const { addToWathList, removeFromWatchList } = dataSlice.actions;
export default dataSlice.reducer;
