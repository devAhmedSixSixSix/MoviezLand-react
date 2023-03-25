import React from "react";
import { useParams } from "react-router-dom";
import CreditDetils from "../components/CreditDetils";
import MovieDetils from "../components/MovieDetils";
import RecommendationsDetils from "../components/RecommendationsDetils";
import ReviewsDetils from "../components/ReviewsDetils";
import {
  useGetCreditDetilsQuery,
  useGetMovieDetilsQuery,
  useGetRecommendationsDetilsQuery,
  useGetReviewsDetilsQuery,
} from "../features/apiMoviesSlice/apiMoviesSlice";

const Detils = () => {
  window.scrollTo(0, 0);
  const id = useParams();
  const { data: movieDetils } = useGetMovieDetilsQuery(id.id);
  const { data: creditDetils } = useGetCreditDetilsQuery(id.id);
  const { data: reviewsDetils } = useGetReviewsDetilsQuery(id.id);
  const { data: recommendationsDetils } = useGetRecommendationsDetilsQuery(
    id.id
  );
  return (
    <div>
      <MovieDetils movieDetils={movieDetils} />
      <CreditDetils creditDetils={creditDetils} />
      <ReviewsDetils reviewsDetils={reviewsDetils} />
      <RecommendationsDetils recommendationsDetils={recommendationsDetils} />
    </div>
  );
};

export default Detils;
