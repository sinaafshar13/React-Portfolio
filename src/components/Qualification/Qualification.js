import React, { useState } from "react";
import "./Qualification.css";
const Qualification = () => {
  const [qualToggle, setQualToggle] = useState(1);
  const Qual = (index) => {
    setQualToggle(index);
  };
  return (
    <section className="section qualification" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-sub">My personal journey</span>
      <div className="qualification-container container">
        <div className="qualification-tab">
          <div
            onClick={() => {
              Qual(1);
            }}
            className={
              qualToggle === 1
                ? "qualification-button qualification-button-active button-flex"
                : "qualification-button button-flex"
            }
          >
            <i className="bi bi-mortarboard qualification-icon"></i>Education
          </div>
          <div
            onClick={() => {
              Qual(2);
            }}
            className={
              qualToggle === 2
                ? "qualification-button qualification-button-active button-flex"
                : "qualification-button button-flex"
            }
          >
            <i className="bx bx-briefcase qualification-icon"></i>Experience
          </div>
        </div>
        <div className="qualification-sections">
          <div
            className={
              qualToggle === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Software Engineer</h3>
                <div className="qualification-sub">Hamadan - University</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2021 - present
                </div>
              </div>
              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Web Design</h3>
                <div className="qualification-sub">Tehran - Institute</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2019 - 2020
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web development</h3>
                <div className="qualification-sub">Tehran - Institute</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">wordpress Developer</h3>
                <div className="qualification-sub">Tehran - Institute</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2017 - 2018
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              qualToggle === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Frontend Developer</h3>
                <div className="qualification-sub">Freelance - Tehran</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2024 - present
                </div>
              </div>
              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">React/js Developer</h3>
                <div className="qualification-sub">Freelance - tehran </div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2023 - 2024
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Wordpress Developer</h3>
                <div className="qualification-sub">Brto team - Hamedan</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification-round"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
