import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
import image from "../../assets/profile.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My projects</span>
      <Swiper
        className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
      {Data.map(({ id, image, title, description,link }) => {
          return (
            <SwiperSlide  key={id}>
             
              <h3 > <a href={link} target='_blank' className="testimonial__name" >{title}</a></h3>
              <img src={image} alt="" className="testimonial__img" />
             
              {/* <h3 className="testimonial__name">{title}</h3> */}
              <p className="testimonial__description"> </p>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </section>
  );
};
//

export default Testimonial;
