import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">skills</h2>
      <span className="section-sub">My technical level</span>
      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
