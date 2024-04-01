import React from "react";

const TestimonialsDatas = ({ img, title, desc }) => {
  return (
    <div className="testimonial-card">
      <img src={img} alt="" className="testimonial-img" />
      <h3 className="testimonial-name">{title}</h3>
      <p className="testimonial-desc">{desc}</p>
    </div>
  );
};

export default TestimonialsDatas;
