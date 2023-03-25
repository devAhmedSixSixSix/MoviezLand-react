import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import PlaceHolderImage from "./PlaceHolderImage";

const Card = ({ item }) => {
  const move = {
    position: "absolute",
    top: "10px",
    left: "10px",
  };
  return (
    <div className="mb-5">
      <Link
        to={`/detils/${item?.id}`}
        className="text-decoration-none text-white"
      >
        {item?.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              item?.poster_path || item.profile_path
            }`}
            alt={item?.name}
            className="w-100 rounded-3"
            style={{
              position: "relative",
            }}
          />
        ) : (
          <PlaceHolderImage />
        )}

        <div
          className="d-flex align-items-center bg-primary px-3 rounded-5"
          style={move}
        >
          <AiFillStar />
          <p className="m-0 ms-1">{Math.round(item?.vote_average)}</p>
        </div>
        <h6 className="my-3">{item?.title || item?.name}</h6>
        <p>{item?.release_date || item?.first_air_date}</p>
        {item.character ? <p>{`Character name: ${item?.character}`}</p> : null}
      </Link>
    </div>
  );
};

export default Card;
