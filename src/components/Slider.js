import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// // import required modules
import { Pagination } from "swiper";
const Slider = ({ sliderData }) => {
  return (
    <div>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <Row>
            {sliderData?.map((item) => (
              <Col sm={12} md={3} lg={2} key={v4()}>
                <SwiperSlide>
                  <Card item={item} />
                </SwiperSlide>
              </Col>
            ))}
          </Row>
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
