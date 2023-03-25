import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import {
  AiFillStar,
  AiFillHeart,
  AiFillDelete,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavourtieList,
  removeFromfavourtieList,
} from "../features/FavouriteDataSlice/FavouriteDataSlice";
import {
  addToWatchedList,
  removeFromWatchedList,
} from "../features/WatchedMoviesDataSlice/WatchedMoviesDataSlice";
import {
  addToWathList,
  removeFromWatchList,
} from "../features/WatchListDataSlice/WatchListDataSlice";

const MoviesLibraryCard = ({ title, item }) => {
  const dispatchFavouriteList = useDispatch();
  const handelFavouriteList = (item) => {
    dispatchFavouriteList(addToFavourtieList(item));
  };

  const dispatchWathedList = useDispatch();
  const handelhWathedList = (item) => {
    dispatchWathedList(addToWatchedList(item));
  };

  const dispatchWatchList = useDispatch();
  const handelWatchList = (item) => {
    dispatchWatchList(addToWathList(item));
  };

  const dispatcRemoveFromfavourtieList = useDispatch();
  const handelRemovefromfavourtieList = (item) => {
    dispatcRemoveFromfavourtieList(removeFromfavourtieList(item));
  };

  const dispatcRemoveWatchedList = useDispatch();
  const handelRemoveWatchedList = (item) => {
    dispatcRemoveWatchedList(removeFromWatchedList(item));
  };

  const dispatcRemoveFromWatchList = useDispatch();
  const handelRemoveFromWatchList = (item) => {
    dispatcRemoveFromWatchList(removeFromWatchList(item));
  };

  return (
    <div>
      <Container>
        <Row className="my-3">
          <Col sm={12} md={3} className="ps-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="ss"
              className="w-100 h-100"
            />
          </Col>
          <Col sm={12} md={9}>
            <Link
              to={`/detils/${item?.id}`}
              className="text-decoration-none text-white"
            >
              <h3>{item.original_title}</h3>
            </Link>
            <div>
              <AiFillStar />
              <span>{Math.round(item.vote_average)}</span>
            </div>
            <p>{item.release_date}</p>
            <p>{item.overview}</p>
            <div className="d-flex flex-wrap">
              <div className="d-flex align-items-center btn-grad p-1 m-1">
                <span>
                  <AiOutlineUnorderedList />
                </span>
                <button
                  onClick={() => handelWatchList(item)}
                  className="btn text-white"
                >
                  watchList
                </button>
              </div>
              <div className="d-flex align-items-center btn-grad p-1 m-1">
                <span>
                  <AiFillHeart />
                </span>
                <button
                  onClick={() => handelFavouriteList(item)}
                  className="btn text-white"
                >
                  Favorate
                </button>
              </div>
              <div className="d-flex align-items-center btn-grad p-1 m-1">
                <span>
                  <BsFillBookmarkHeartFill />
                </span>
                <button
                  onClick={() => handelhWathedList(item)}
                  className="btn text-white"
                >
                  Watched
                </button>
              </div>
              <div>
                {title === "WatchList" ? (
                  <div className="d-flex align-items-center btn-grad p-1 m-1">
                    <span>
                      <AiFillDelete />
                    </span>
                    <button
                      onClick={() => handelRemoveFromWatchList(item)}
                      className="btn text-white"
                    >
                      Remove
                    </button>
                  </div>
                ) : null}
                {title === "Favourite" ? (
                  <div className="d-flex align-items-center btn-grad p-1 m-1">
                    <span>
                      <AiFillDelete />
                    </span>
                    <button
                      onClick={() => handelRemovefromfavourtieList(item)}
                      className="btn text-white"
                    >
                      Remove it
                    </button>
                  </div>
                ) : null}
                {title === "Watched Movies" ? (
                  <div className="d-flex align-items-center btn-grad p-1 m-1">
                    <span>
                      <AiFillDelete />
                    </span>
                    <button
                      onClick={() => handelRemoveWatchedList(item)}
                      className="btn text-white"
                    >
                      Remove it
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviesLibraryCard;
