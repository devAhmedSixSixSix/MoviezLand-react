import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

const SearchDrobDown = ({ searchData, search }) => {
  return (
    <div
      className="bg-white rounded"
      style={{
        overflowY: "scroll",
        height: "333px",
      }}
    >
      {search.length > 0 ? null : <p>Find a movies...</p>}

      {searchData.data.results === undefined ? (
        <p>{search}</p>
      ) : (
        searchData.data.results.map((item) => (
          <Link
            key={v4()}
            to={`detils/${item.id}`}
            className="text-decoration-none"
          >
            <div className="d-flex align-items-center mb-1">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.original_title}
                width={50}
              />
              <div>
                <h6>{item.original_title || item.original_name}</h6>
                <p>{item.overview && item.overview.slice(0, 60) + "..."}</p>
              </div>
              <hr />
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchDrobDown;
