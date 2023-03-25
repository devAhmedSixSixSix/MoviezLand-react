import React from "react";
import Slider from "./Slider";

const ActorCreidt = ({ actorCredit }) => {
  return (
    <div className="mt-5">
      <Slider sliderData={actorCredit?.cast} />
    </div>
  );
};

export default ActorCreidt;
