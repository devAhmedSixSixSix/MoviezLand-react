import React, { useState } from "react";

const ToggelMenu = ({ setDate }) => {
  const [bgColor, setBgColor] = useState(true);

  return (
    <div className="d-flex align-items-center gap-1 border rounded-5 text-white">
      <p
        className="m-0 px-4 py-1 rounded-5 pointer"
        style={{
          backgroundColor: bgColor ? "#000022" : "",
        }}
        onClick={(e) => {
          setDate(e.target.innerHTML.toLowerCase());
          setBgColor(!bgColor);
        }}
      >
        Day
      </p>

      <p
        className="m-0 px-4 py-1 rounded-5 pointer"
        style={{
          backgroundColor: bgColor ? "" : "#000022",
        }}
        onClick={(e) => {
          setDate(e.target.innerHTML.toLowerCase());
          setBgColor(!bgColor);
        }}
      >
        Week
      </p>
    </div>
  );
};

export default ToggelMenu;
