import React, { useState } from "react";
import heroBanner from "../Assest/Images/banner.jpg";
import Form from "react-bootstrap/Form";
import SearchDrobDown from "./SearchDrobDown";
import Container from "react-bootstrap/esm/Container";
import { useGetSearchResultQuery } from "../features/apiMoviesSlice/apiMoviesSlice";

const HeroBanner = () => {
  const bg = {
    backgroundImage: `url(${heroBanner})`,
    backgroundSize: "cover",
    height: "80vh",
  };
  const overlay = {
    backgroundColor: "rgba(0, 33, 99, 0.9)",
    width: "100%",
    height: "100%",
  };
  const [search, setSearch] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  const searchResult = useGetSearchResultQuery(search);

  const [dropdown, setDropDown] = useState(false);
  return (
    <div style={bg}>
      <div
        style={overlay}
        className="d-flex align-items-center justify-content-center"
      >
        <Container>
          <div className="text-white mb-5">
            <h2>Welcome. </h2>
            <h2>Search millions of movies, Explore now.</h2>
          </div>
          {/*  */}
          <Form onSubmit={handelSubmit}>
            <div className="d-flex position-relative">
              <Form.Group className="w-100">
                <Form.Control
                  className="rounded-5 "
                  type="search"
                  placeholder="Search a movie..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  onFocus={() => setDropDown(true)}
                  // onBlur={() => setDropDown(false)}
                />
              </Form.Group>
              <div
                className="position-absolute w-100"
                style={{
                  zIndex: "9999",
                  top: "40px",
                }}
              >
                {dropdown ? (
                  <div>
                    <SearchDrobDown searchData={searchResult} search={search} />
                  </div>
                ) : null}
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default HeroBanner;
