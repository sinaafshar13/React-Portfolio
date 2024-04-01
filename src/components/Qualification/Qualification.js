import React, { useState } from "react";
import "./Qualification.css";
const Qualification = () => {
  const [qualToggle, setQualtoggle] = useState(1);
  const Qual = (index) => {
    setQualtoggle(index);
  };
  return (
    <section className="section qualification" id="qualification">
      <h2 className="section-title">Qualification</h2>
      <span className="section-sub">My personel journey</span>
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
            <i className="bi bi-mortarboard qualification-icon"></i>Eduacation
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
                <h3 className="qualification-title">Saftware Engineer</h3>
                <div className="qualification-sub">Hamedan - University</div>
                <div className="qualification-calender">
                  <i className="bx bx-calendar"></i>2021 - peresent
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
                  <i className="bx bx-calendar"></i>2018 - 2017
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
                  <i className="bx bx-calendar"></i>2024 - peresent
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
