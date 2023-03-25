import React from "react";
import { Link } from "react-router-dom";

const RecommendationsDetilsCard = ({ item }) => {
  return (
    <div>
      <Link
        to={`/detils/${item.id}`}
        className="text-decoration-none text-white"
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt={item.title}
          className="rounded-3 h-100 w-100"
        />
        <h6 className="pb-5 pt-2">{item.title}</h6>
      </Link>
    </div>
  );
};

export default RecommendationsDetilsCard;
