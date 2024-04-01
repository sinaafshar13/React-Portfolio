import React from "react";
import "./ScrollUp.css";
const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scroll-up");
    if (this.scrollY > 600) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#" className="scroll-up">
      <i className="bx bx-up-arrow-alt scroll-up-icon"></i>
    </a>
  );
};

export default ScrollUp;
