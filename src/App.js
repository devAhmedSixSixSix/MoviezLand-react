import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Pages/Home";
import Detils from "./Pages/Detils";
import Actor from "./Pages/Actor";
import Navigationbar from "./components/Navigationbar";
import MoviesLibrary from "./Pages/MoviesLibrary";
import UnNamed from "./Pages/UnNamed";
import MoviesLibrarySection from "./Pages/MoviesLibrarySection";
import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpComingMoviesQuery,
} from "./features/apiMoviesSlice/apiMoviesSlice";
import NotFound from "./components/NotFound";

function App() {
  // get popular movies data
  const [popularMoviesPageNumber, setPopularMoviesPageNumber] = useState(1);
  const { data: popularMoviesData, isFetching: isPopularMoviesFetching } =
    useGetPopularMoviesQuery(popularMoviesPageNumber);

  // get top rated movies data
  const [topRatedMoviesPageNumber, setTopRatedMoviesPageNumber] = useState(1);
  const { data: topRatedMoviesData, isFetching: isTopRatedMoviesFetching } =
    useGetTopRatedMoviesQuery(topRatedMoviesPageNumber);

  // get now playing data
  const [nowPlayingMoviesPageNumber, setNowPlayingMoviesPageNumber] =
    useState(1);
  const { data: nowPlayingMoviesData, isFetching: isNowPlayingMoviesFetching } =
    useGetNowPlayingMoviesQuery(nowPlayingMoviesPageNumber);

  // get upcoming movies data
  const [upComingMoviesPageNumber, setUpComingMoviesPageNumber] = useState(1);
  const { data: upComingMoviesData, isFetching: isUpComingMoviesFetching } =
    useGetUpComingMoviesQuery(upComingMoviesPageNumber);

  const WatchList = useSelector((state) => state.WatchList);
  const favourtieList = useSelector((state) => state.favourtieList);
  const WatchedList = useSelector((state) => state.WatchedList);

  return (
    <div className="App">
      <Navigationbar />
      <div className="pt-5">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/popular-movies"
            element={
              <UnNamed
                title="Popular Movies"
                myData={popularMoviesData}
                isFetching={isPopularMoviesFetching}
                page={popularMoviesPageNumber}
                setPage={setPopularMoviesPageNumber}
              />
            }
          />
          <Route
            path="/now-playing"
            element={
              <UnNamed
                title="Now Playing Movies"
                myData={nowPlayingMoviesData}
                isFetching={isNowPlayingMoviesFetching}
                page={nowPlayingMoviesPageNumber}
                setPage={setNowPlayingMoviesPageNumber}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <UnNamed
                title="Upcoming Movies"
                myData={upComingMoviesData}
                isFetching={isUpComingMoviesFetching}
                page={upComingMoviesPageNumber}
                setPage={setUpComingMoviesPageNumber}
              />
            }
          />
          <Route
            path="/top-rated-movies"
            element={
              <UnNamed
                title="Top Rated Movies"
                myData={topRatedMoviesData}
                isFetching={isTopRatedMoviesFetching}
                page={topRatedMoviesPageNumber}
                setPage={setTopRatedMoviesPageNumber}
              />
            }
          />

          <Route path="/detils/:id" element={<Detils />} />
          <Route path="/actor/:id" element={<Actor />} />
          <Route
            path="/libarary"
            element={
              <MoviesLibrary title="Favorate List" WatchList={WatchList} />
            }
          >
            <Route
              path="watchList"
              element={
                <MoviesLibrarySection title="WatchList" data={WatchList} />
              }
            />
            <Route
              path="favourite"
              element={
                <MoviesLibrarySection title="Favourite" data={favourtieList} />
              }
            />
            <Route
              path="watched-movies"
              element={
                <MoviesLibrarySection
                  title="Watched Movies"
                  data={WatchedList}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
