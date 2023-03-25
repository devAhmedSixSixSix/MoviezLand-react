import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getUpComingMovies: builder.query({
      query: (page = 1) =>
        `movie/upcoming?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&page=${page}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ getUpComingMovies }) => {
        return getUpComingMovies;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTopRatedMovies: builder.query({
      query: (page = 1) =>
        `movie/top_rated?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&page=${page}`,
      serializeQueryArgs: ({ getTopRatedMovies }) => {
        return getTopRatedMovies;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPopularMovies: builder.query({
      query: (page = 1) =>
        `movie/popular?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&page=${page}`,
      serializeQueryArgs: ({ getPopularMovies }) => {
        return getPopularMovies;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getNowPlayingMovies: builder.query({
      query: (page = 1) =>
        `movie/now_playing?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&page=${page}`,
      serializeQueryArgs: ({ getNowPlayingMovies }) => {
        return getNowPlayingMovies;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTrendingMovies: builder.query({
      query: (date) =>
        `trending/movie/${date}?api_key=aa74d79da6dd6e39947e5788da683247`,
    }),
    getSearchResult: builder.query({
      query: (search) =>
        `search/movie?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&query=${search}&page=1&include_adult=false`,
    }),
    getActorDetils: builder.query({
      query: (id) =>
        `person/${id}?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US`,
    }),
    getActorCreidt: builder.query({
      query: (id) =>
        `person/${id}/movie_credits?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US`,
    }),
    getMovieDetils: builder.query({
      query: (id) =>
        `movie/${id}?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US`,
    }),
    getCreditDetils: builder.query({
      query: (id) =>
        `movie/${id}/credits?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US`,
    }),
    getReviewsDetils: builder.query({
      query: (id) =>
        `movie/${id}/reviews?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&page=1`,
    }),
    getRecommendationsDetils: builder.query({
      query: (id) =>
        `movie/${id}/recommendations?api_key=aa74d79da6dd6e39947e5788da683247&language=en-US&page=1`,
    }),
  }),
});

export const {
  useGetUpComingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetSearchResultQuery,
  useGetActorDetilsQuery,
  useGetActorCreidtQuery,
  useGetMovieDetilsQuery,
  useGetCreditDetilsQuery,
  useGetReviewsDetilsQuery,
  useGetRecommendationsDetilsQuery,
} = moviesApi;
