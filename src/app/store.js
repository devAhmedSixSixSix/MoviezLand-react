import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import SearchDataReducer from "../features/SearchDataSlice/SearchDataSlice";
import WatchListReducer from "../features/WatchListDataSlice/WatchListDataSlice";
import favourtieListReducer from "../features/FavouriteDataSlice/FavouriteDataSlice";
import WatchedListReducer from "../features/WatchedMoviesDataSlice/WatchedMoviesDataSlice";
import { moviesApi } from "../features/apiMoviesSlice/apiMoviesSlice";

const store = configureStore({
  reducer: {
    // get movies
    [moviesApi.reducerPath]: moviesApi.reducer,

    // get search value
    searchData: SearchDataReducer,

    // get My Library value
    WatchList: WatchListReducer,
    favourtieList: favourtieListReducer,
    WatchedList: WatchedListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
