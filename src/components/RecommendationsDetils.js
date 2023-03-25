import React from "react";
import Container from "react-bootstrap/esm/Container";
import Slider from "./Slider";

const RecommendationsDetils = ({ recommendationsDetils }) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="text-white py-5">
          Recommendations {recommendationsDetils?.results.length}
        </h2>
        {recommendationsDetils && (
          <Slider sliderData={recommendationsDetils.results} />
        )}
      </Container>
    </div>
  );
};

export default RecommendationsDetils;
