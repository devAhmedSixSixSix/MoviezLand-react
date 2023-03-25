import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesData: [],
};

const favouriteSlice = createSlice({
  name: "favourtieList",
  initialState,
  reducers: {
    addToFavourtieList(state, action) {
      state.moviesData.push(action.payload);
    },
    removeFromfavourtieList(state, action) {
      const listItem = state.moviesData.filter(
        (item) => item.id !== action.payload.id
      );
      state.moviesData = listItem;
    },
  },
});

export const { addToFavourtieList, removeFromfavourtieList } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
