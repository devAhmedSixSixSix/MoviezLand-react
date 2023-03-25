import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navigationbar() {
  const bg = {
    backgroundColor: "#001D56",
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
  };
  return (
    <>
      <Navbar style={bg} fixed="top" expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-white">
            Moviez Land
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
                className="text-white"
              >
                Moviez Land
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3 text-white">
                <NavDropdown
                  className="text-white"
                  title="Movies"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/popular-movies">
                    Popular
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/now-playing">
                    Now Playing
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/upcoming">
                    Upcoming
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/top-rated-movies">
                    Top Rated
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/libarary" className="text-white">
                  My Library
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
