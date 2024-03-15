import React from "react";

function Frontend() {
  return (
    <div className="skills-info">
      <h3 className="skills-header">Frontend Developer</h3>
      <div className="skills-boxes grid">
        <div className="skills-box">
          <i className="bx bx-badge-check skills-icon"></i>
          <h3 className="skills-title">HTML</h3>
          <span className="skills-sub">Basic</span>
        </div>
        <div className="skills-box">
          <i className="bx bx-badge-check skills-icon"></i>
          <h3 className="skills-title">CSS</h3>
          <span className="skills-sub">Advanced</span>
        </div>
        <div className="skills-box">
          <i className="bx bx-badge-check skills-icon"></i>
          <h3 className="skills-title">JavaScript</h3>
          <span className="skills-sub">Intermediate</span>
        </div>
        <div className="skills-box">
          <i className="bx bx-badge-check skills-icon"></i>
          <h3 className="skills-title">Bootstrap</h3>
          <span className="skills-sub">Intermediate</span>
        </div>
        <div className="skills-box">
          <i className="bx bx-badge-check skills-icon"></i>
          <h3 className="skills-title">Git</h3>
          <span className="skills-sub">Intermediate</span>
        </div>
        <div className="skills-box">
          <i className="bx bx-badge-check skills-icon"></i>
          <h3 className="skills-title">React</h3>
          <span className="skills-sub">Intermediate</span>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
