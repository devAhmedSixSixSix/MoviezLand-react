import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "../components/Card";
import SkeltonPlaceHolder from "../components/SkeltonPlaceHolder";
import { v4 } from "uuid";

const UnNamed = ({ title, myData, isFetching, page, setPage }) => {
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching, setPage]);
  return (
    <div className="text-white mt-5">
      <Container>
        <h2 className="mb-5">{title}</h2>
        <Row>
          {myData === undefined ? (
            <SkeltonPlaceHolder />
          ) : (
            myData.results.map((item) => (
              <Col xs={12} sm={6} md={4} lg={2} key={v4()}>
                <Card item={item} />
              </Col>
            ))
          )}
          {isFetching ? <SkeltonPlaceHolder /> : null}
        </Row>
      </Container>
    </div>
  );
};

export default UnNamed;
