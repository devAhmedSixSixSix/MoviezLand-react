import React from "react";
import CreditDetilsCard from "./CreditDetilsCard";
import Container from "react-bootstrap/Container";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// // import required modules
import { Pagination } from "swiper";
import SkeltonPlaceHolder from "./SkeltonPlaceHolder";

const CreditDetils = ({ creditDetils }) => {
  return (
    <div className="py-5 text-white">
      <Container>
        <h2 className="py-5">Cast {creditDetils?.cast.length}</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
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
          {creditDetils === undefined ? (
            <SkeltonPlaceHolder />
          ) : (
            creditDetils.cast.map((item) => (
              <div key={crypto.randomUUID()}>
                <SwiperSlide>
                  <CreditDetilsCard item={item} />
                </SwiperSlide>
              </div>
            ))
          )}
        </Swiper>
      </Container>
    </div>
  );
};

export default CreditDetils;
