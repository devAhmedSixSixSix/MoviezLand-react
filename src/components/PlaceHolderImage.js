import React from "react";
import placeHolderImage from "../Assest/Images/placeHolderImage.jpg";
const PlaceHolderImage = () => {
  return (
    <div>
      <img
        src={placeHolderImage}
        alt="placeholder"
        className="w-100 rounded"
        width={200}
        height={300}
      />
    </div>
  );
};

export default PlaceHolderImage;
