import React from "react";
import "./Testimonials.css";
import TestimonialsDatas from "./TestimonialsDatas";
import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  const TestimonialsData = [
    {
      id: 1,
      img: Image1,
      title: "Jhon Doe",
      desc: "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
      id: 2,
      img: Image2,
      title: "Harry Clinton",
      desc: "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
      id: 3,
      img: Image3,
      title: "Sara Chill",
      desc: "A really good job, all aspects of the project were followed step by step and with good results.",
    },
  ];
  return (
    <section className="section testimonial" id="testimonial">
      <h2 className="section-title">Testimonials</h2>
      <span className="section-sub">My Clients say</span>
      <Swiper
        className="testimonial-container"
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
        {TestimonialsData.map((TestimonialData) => (
          <SwiperSlide key={TestimonialData.id}>
            <TestimonialsDatas {...TestimonialData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Testimonials;
