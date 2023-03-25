import React from "react";
import MoviesLibraryCard from "../components/MoviesLibraryCard";
import { v4 } from "uuid";

const MoviesLibrarySection = ({ title, data }) => {
  window.scrollTo(0, 0);
  // to remove duplicated values
  const ids = data.moviesData.map((item) => item.id);
  const filtered = data.moviesData.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  return (
    <div>
      <h2>{`${title} ${data.moviesData.length}`}</h2>
      {filtered &&
        filtered.map((item) => (
          <MoviesLibraryCard key={v4()} item={item} title={title} />
        ))}
    </div>
  );
};

export default MoviesLibrarySection;
