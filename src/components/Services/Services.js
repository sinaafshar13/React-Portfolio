import React, { useState } from "react";
import "./Services.css";
const Services = () => {
  const [modalToggle, setModalToggle] = useState(0);
  const ModalClose = () => {
    setModalToggle(0);
  };
  const Modal1 = () => {
    setModalToggle(1);
  };
  const Modal2 = () => {
    setModalToggle(2);
  };
  const Modal3 = () => {
    setModalToggle(3);
  };
  return (
    <section className="section services" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-sub">What i offer</span>
      <div className="services-container container">
        <div className="services-content">
          <div>
            <i className="bx bxs-layout services-icon"></i>
            <h3 className="services-title">
              Web <br /> Development
            </h3>
          </div>
          <span onClick={Modal1} className="services-button">
            View More
            <i className="bx bx-right-arrow-alt services-button-icon"></i>
          </span>
          <div
            className={
              modalToggle === 1
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={ModalClose}
                className="bx bx-x services-modal-close"
              ></i>

              <h3 className="services-modal-title">Web Development</h3>
              <p className="services-modal-desc">
                Frontend Developer dedicated to crafting engaging web
                applications and contributing to innovative projects.
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Proficient in HTML5, CSS3, and JavaScript
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Experience with React.js
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Familiarity with version control systems, particularly Git
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Strong understanding of responsive design principles
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Knowledge of UI/UX best practices
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Ability to collaborate with cross-functional teams
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div>
            <i className="bx bxs-devices services-icon"></i>
            <h3 className="services-title">
              Full <br /> Responsive
            </h3>
          </div>
          <span onClick={Modal2} className="services-button">
            View More
            <i className="bx bx-right-arrow-alt services-button-icon"></i>
          </span>
          <div
            className={
              modalToggle === 2
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={ModalClose}
                className="bx bx-x services-modal-close"
              ></i>

              <h3 className="services-modal-title">Full Responsive</h3>
              <p className="services-modal-desc">
                Frontend Developer dedicated to crafting engaging web
                applications and contributing to innovative projects.
              </p>
              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Proficient in HTML5, CSS3, and JavaScript
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Experience with React.js
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Familiarity with version control systems, particularly Git
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Strong understanding of responsive design principles
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Knowledge of UI/UX best practices
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Ability to collaborate with cross-functional teams
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services-content">
          <div>
            <i className="bx bx-expand-alt services-icon"></i>
            <h3 className="services-title">
              UX
              <br /> Interactions
            </h3>
          </div>
          <span onClick={Modal3} className="services-button">
            View More
            <i className="bx bx-right-arrow-alt  services-button-icon"></i>
          </span>
          <div
            className={
              modalToggle === 3
                ? "services-modal active-modal"
                : "services-modal"
            }
          >
            <div className="services-modal-content">
              <i
                onClick={ModalClose}
                className="bx bx-x services-modal-close"
              ></i>

              <h3 className="services-modal-title">UX Interactions</h3>
              <p className="services-modal-desc">
                Frontend Developer dedicated to crafting engaging web
                applications and contributing to innovative projects.
              </p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Proficient in HTML5, CSS3, and JavaScript
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Experience with React.js
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Familiarity with version control systems, particularly Git
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Strong understanding of responsive design principles
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Knowledge of UI/UX best practices
                  </p>
                </li>
                <li className="services-modal-service">
                  <i className="bx bx-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">
                    Ability to collaborate with cross-functional teams
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
