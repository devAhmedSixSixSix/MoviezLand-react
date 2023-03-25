import React from "react";
import Container from "react-bootstrap/Container";
import SkeltonPlaceHolder from "./SkeltonPlaceHolder";
import Slider from "./Slider";
import ToggelMenu from "./ToggelMenu";

const Section = ({ title, myData, setDate, toogleMenuVsibilty }) => {
  return (
    <div className="my-5">
      <Container>
        <div className="d-flex align-items-center gap-3 mb-5">
          <h2 className="text-white">{title}</h2>
          {toogleMenuVsibilty ? <ToggelMenu setDate={setDate} /> : null}
        </div>
        {myData === undefined ? (
          <SkeltonPlaceHolder />
        ) : (
          <Slider sliderData={myData?.results} />
        )}
      </Container>
    </div>
  );
};

export default Section;
