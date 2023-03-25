import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  erorr: "",
};

export const fetchSearch = createAsyncThunk(
  "SearchData/fetchSearch",
  async (search) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&query=${search}&page=1&include_adult=false`
    );
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "searchData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
