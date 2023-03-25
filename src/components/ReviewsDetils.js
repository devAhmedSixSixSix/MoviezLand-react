import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import ReviewsDetilsCard from "./ReviewsDetilsCard";
import SkeltonPlaceHolder from "./SkeltonPlaceHolder";
import { v4 } from "uuid";

const ReviewsDetils = ({ id, reviewsDetils }) => {
  const [loadMore, setLoadMore] = useState(1);

  const handelLoadMoreComment = () => {
    setLoadMore(loadMore + 1);
  };

  const bg = {
    backgroundColor: "rgba(0, 33, 99, 0.95)",
  };

  return (
    <div style={bg} className="text-white py-5">
      <Container>
        <h2>
          Reviews
          {reviewsDetils?.total_results}
        </h2>
        {reviewsDetils?.results === undefined ? (
          <SkeltonPlaceHolder />
        ) : (
          reviewsDetils?.results.slice(0, loadMore).map((item) => (
            <div key={v4()}>
              <ReviewsDetilsCard item={item} />
            </div>
          ))
        )}
        {loadMore >=
        reviewsDetils?.total_results ? null : reviewsDetils?.results ===
          undefined ? null : (
          <p
            onClick={handelLoadMoreComment}
            className="text-center btn-grad w-50 m-auto pointer"
          >
            Load More
          </p>
        )}
      </Container>
    </div>
  );
};

export default ReviewsDetils;
