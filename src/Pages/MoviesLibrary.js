import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link, Outlet } from "react-router-dom";
import MoviesLibrarySection from "./MoviesLibrarySection";

const MoviesLibrary = ({ WatchList }) => {
  window.scrollTo(0, 0);
  const [visibility, setVisibility] = useState(true);
  const handelTapsVisibility = () => {
    setVisibility(false);
  };
  return (
    <div className="text-white">
      <Container>
        <Row className="mt-5">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="watchList"
                className="text-white"
                onClick={() => handelTapsVisibility()}
              >
                <h6> WatchList</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="favourite"
                className="text-white"
                onClick={() => handelTapsVisibility()}
              >
                <h6>Favourite</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="watched-movies"
                className="text-white"
                onClick={() => handelTapsVisibility()}
              >
                <h6> Watched Movies</h6>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {visibility === true ? (
            <MoviesLibrarySection title="WatchList" data={WatchList} />
          ) : null}
          <Outlet />
        </Row>
      </Container>
    </div>
  );
};

export default MoviesLibrary;
