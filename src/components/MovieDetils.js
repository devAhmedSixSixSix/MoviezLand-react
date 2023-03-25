import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { addToFavourtieList } from "../features/FavouriteDataSlice/FavouriteDataSlice";
import { addToWathList } from "../features/WatchListDataSlice/WatchListDataSlice";
import { addToWatchedList } from "../features/WatchedMoviesDataSlice/WatchedMoviesDataSlice";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import SkeltonPlaceHolder from "./SkeltonPlaceHolder";
import { v4 } from "uuid";

const MovieDetils = ({ movieDetils }) => {
  const bg = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetils?.backdrop_path})`,
    backgroundSize: "cover",
  };
  const overlay = {
    backgroundColor: "rgba(0, 33, 99, 0.85)",
    width: "100%",
    height: "100%",
  };

  const dispatchFavouriteList = useDispatch();
  const handelFavouriteList = (movieDetils) => {
    dispatchFavouriteList(addToFavourtieList(movieDetils));
  };

  const dispatchWathedList = useDispatch();
  const handelhWathedList = (movieDetils) => {
    dispatchWathedList(addToWatchedList(movieDetils));
  };

  const dispatchWatchList = useDispatch();
  const handelWatchList = (movieDetils) => {
    dispatchWatchList(addToWathList(movieDetils));
  };

  return (
    <div style={bg} className="text-white">
      <div style={overlay} className="py-5">
        <Container>
          {movieDetils === undefined ? (
            <SkeltonPlaceHolder />
          ) : (
            <Row>
              <Col sm={12} lg={4}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetils?.poster_path}`}
                  alt={movieDetils?.title}
                  className="w-100 rounded-3"
                />
              </Col>
              <Col sm={12} lg={8}>
                <h2>{movieDetils?.title}</h2>
                <div className=" d-flex flex-wrap my-3">
                  {movieDetils?.genres.map((item) => (
                    <span
                      key={v4()}
                      className="rounded-5 px-2 py-1 me-1 my-1"
                      style={{
                        background: "#002163",
                      }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <p>{movieDetils?.release_date}</p>
                <p className="d-flex align-items-center gap-1">
                  <AiFillStar />
                  {Math.round(movieDetils?.vote_average)}
                </p>
                <p>{movieDetils?.tagline}</p>
                <div>
                  <h2>Overview:</h2>
                  <p>{movieDetils?.overview}</p>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="d-flex align-items-center btn-grad p-1 m-1">
                    <AiOutlineUnorderedList />
                    <button
                      onClick={() => handelWatchList(movieDetils)}
                      className="btn text-white"
                    >
                      WatchList
                    </button>
                  </div>
                  <div className="d-flex align-items-center btn-grad p-1 m-1">
                    <AiFillHeart />
                    <button
                      onClick={() => handelFavouriteList(movieDetils)}
                      className="btn text-white"
                    >
                      Favourite
                    </button>
                  </div>
                  <div className="d-flex align-items-center btn-grad p-1 m-1">
                    <BsFillBookmarkHeartFill />
                    <button
                      onClick={() => handelhWathedList(movieDetils)}
                      className="btn text-white"
                    >
                      Watched Movies
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </div>
  );
};

export default MovieDetils;
