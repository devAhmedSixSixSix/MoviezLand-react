import React, { useState } from "react";
import Section from "../components/Section";
import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetTrendingMoviesQuery,
} from "../features/apiMoviesSlice/apiMoviesSlice.js";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  window.scrollTo(0, 0);
  const { data: upComingMoviesData } = useGetPopularMoviesQuery();
  const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery();
  const [date, setDate] = useState("day");
  const { data: treandingDataMovies } = useGetTrendingMoviesQuery(date);
  return (
    <div>
      <HeroBanner />
      <Section
        title="Trending"
        myData={treandingDataMovies}
        setDate={setDate}
        toogleMenuVsibilty={true}
      />
      <Section
        title="Popular To Watch"
        myData={upComingMoviesData}
        toogleMenuVsibilty={false}
      />
      <Section
        title="Top Rated"
        myData={topRatedMoviesData}
        toogleMenuVsibilty={false}
      />
    </div>
  );
};

export default Home;
