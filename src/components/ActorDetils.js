import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SkeltonPlaceHolder from "./SkeltonPlaceHolder";

const ActorDetils = ({ actorDetils }) => {
  const [content, setContent] = useState(false);
  const showFullDescriptionHandler = () => {
    setContent(!content);
  };
  const description = content
    ? actorDetils && actorDetils.biography
    : actorDetils && actorDetils.biography.slice(0, 200);
  const bg = {
    backgroundColor: "rgba(0, 33, 99, 0.8)",
  };
  return (
    <div className="text-white p-5" style={bg}>
      <Container>
        {actorDetils === undefined ? (
          <SkeltonPlaceHolder />
        ) : (
          <Row>
            <Col sm={12} md={6} lg={3}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  actorDetils && actorDetils.profile_path
                }`}
                alt={actorDetils && actorDetils.name}
                className="w-100 rounded-2"
              />
            </Col>
            <Col sm={12} md={6} lg={9}>
              <h2>{actorDetils && actorDetils.name}</h2>
              {actorDetils && actorDetils.biography.length > 1 ? (
                <div>
                  <h4>Biography</h4>
                  <span>{description} </span>
                  <span
                    onClick={showFullDescriptionHandler}
                    className="pointer text-muted"
                  >
                    READ {content ? "LESS" : "MORE..."}
                  </span>
                </div>
              ) : null}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ActorDetils;
