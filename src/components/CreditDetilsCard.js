import React from "react";
import { Link } from "react-router-dom";
import PlaceHolderImage from "./PlaceHolderImage";

const CreditDetilsCard = ({ item }) => {
  return (
    <div>
      <Link
        to={`/actor/${item.id}`}
        className="text-decoration-none text-white"
      >
        {item.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
            alt={item.name}
            className="rounded-3"
          />
        ) : (
          <PlaceHolderImage />
        )}
        <h6 className="py-2">{item.name}</h6>
        <p>{item.character}</p>
      </Link>
    </div>
  );
};

export default CreditDetilsCard;
