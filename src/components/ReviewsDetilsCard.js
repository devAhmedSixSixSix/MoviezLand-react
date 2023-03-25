import React, { useState } from "react";

const ReviewsDetilsCard = ({ item }) => {
  const [content, setContent] = useState(false);
  const showFullDescriptionHandler = () => {
    setContent(!content);
  };
  const description = content ? item.content : item.content.slice(0, 222);

  return (
    <div className="p-5">
      <div>
        <div className="d-flex align-items-center">
          <img
            width={75}
            height={75}
            className="rounded-circle me-3"
            src={`https://image.tmdb.org/t/p/w200/${item.author_details.avatar_path}`}
            alt={item.author}
          />
          <div>
            <h6>A review by {item.author}</h6>
            <span>Rating {item.author_details.rating}</span>
          </div>
        </div>
        <div>
          <span>{description} </span>
          <span
            onClick={showFullDescriptionHandler}
            className="pointer text-muted"
          >
            READ {content ? "LESS" : "MORE..."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetilsCard;
