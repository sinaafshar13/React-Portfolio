import React from "react";

function AboutInfo() {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-sub">1 Years Working</span>
      </div>
      <div className="about-box">
        <i className="bx bx-briefcase about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-sub">23 + Projects</span>
      </div>
      <div className="about-box">
        <i className="bx bx-support about-icon"></i>
        <h3 className="about-title">Support</h3>
        <span className="about-sub">Online 24/7</span>
      </div>
    </div>
  );
}

export default AboutInfo;
