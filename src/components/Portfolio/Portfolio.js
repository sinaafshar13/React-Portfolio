import React, { useEffect, useState } from "react";
import Mixitup from "mixitup";
import "./Portfolio.css";

import work1 from "../../assets/work1.jpg"; // Import images
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";

const Portfolio = () => {
  // mixitup
  useEffect(() => {
    Mixitup(".portfolio-container", {
      selectors: {
        target: ".portfolio-card",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);
  // active portfolio item
  const [itemToggle, setItemToggle] = useState(0);
  const toggleFilter = (index) => {
    setItemToggle(index);
  };
  // portfolio modal
  const [modalToggle, setModalToggle] = useState(0);
  const Modal = (index) => {
    setModalToggle(index);
  };
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section-title"> Portfolio </h2>
      <span className="section-sub">My introduction</span>
      <div className="portfolio-filters">
        <span
          onClick={() => toggleFilter(0)}
          className={
            itemToggle === 0
              ? "portfolio-item portfolio-item-active"
              : "portfolio-item"
          }
          data-filter=".all"
        >
          All
        </span>
        <span
          onClick={() => toggleFilter(1)}
          className={
            itemToggle === 1
              ? "portfolio-item portfolio-item-active"
              : "portfolio-item"
          }
          data-filter=".web"
        >
          Web
        </span>
        <span
          onClick={() => toggleFilter(2)}
          className={
            itemToggle === 2
              ? "portfolio-item portfolio-item-active"
              : "portfolio-item"
          }
          data-filter=".app"
        >
          App
        </span>
        <span
          onClick={() => toggleFilter(3)}
          className={
            itemToggle === 3
              ? "portfolio-item portfolio-item-active"
              : "portfolio-item"
          }
          data-filter=".support"
        >
          Support
        </span>
      </div>
      <div className="portfolio-container container">
        <div className="portfolio-card all web">
          <img className="card-img" src={work1} alt="" />
          <h3 className="card-title">Web Development</h3>
          <span
            onClick={() => {
              Modal(1);
            }}
            className="card-button"
          >
            Demo
            <i className="bx bx-right-arrow-alt card-button-icon"></i>
          </span>
          <div
            className={
              modalToggle === 1
                ? "portfolio-modal active-modal"
                : "portfolio-modal "
            }
          >
            <div className="portfolio-card-details">
              <i
                onClick={() => {
                  Modal(0);
                }}
                className="bx bx-x details-modal-close"
              ></i>
              <img src={work1} alt="" className="details-img" />
              <div className="details-content">
                <div className="details-featured">
                  Featured - <span>Web</span>
                </div>
                <h3 className="details-title">
                  Web for technologies & details{" "}
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa voluptatem laudantium neque sapiente
                </p>
                <ul className="details-info">
                  <li>
                    Created - <span>4 Dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>Html Css</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">www.domain.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-card all web">
          <img className="card-img" src={work2} alt="" />
          <h3 className="card-title">Web Development</h3>
          <span
            onClick={() => {
              Modal(2);
            }}
            className="card-button"
          >
            Demo
            <i className="bx bx-right-arrow-alt card-button-icon"></i>
          </span>
          <div
            className={
              modalToggle === 2
                ? "portfolio-modal active-modal"
                : "portfolio-modal "
            }
          >
            <div className="portfolio-card-details">
              <i
                onClick={() => {
                  Modal(0);
                }}
                className="bx bx-x details-modal-close"
              ></i>
              <img src={work2} alt="" className="details-img" />
              <div className="details-content">
                <div className="details-featured">
                  Featured - <span>Web</span>
                </div>
                <h3 className="details-title">
                  Web for technologies & details{" "}
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa voluptatem laudantium neque sapiente
                </p>
                <ul className="details-info">
                  <li>
                    Created - <span>4 Dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>Html Css</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">www.domain.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-card all app">
          <img className="card-img" src={work3} alt="" />
          <h3 className="card-title">Web Development</h3>
          <span
            onClick={() => {
              Modal(3);
            }}
            className="card-button"
          >
            Demo
            <i className="bx bx-right-arrow-alt card-button-icon"></i>
          </span>
          <div
            className={
              modalToggle === 3
                ? "portfolio-modal active-modal"
                : "portfolio-modal "
            }
          >
            <div className="portfolio-card-details">
              <i
                onClick={() => {
                  Modal(0);
                }}
                className="bx bx-x details-modal-close"
              ></i>
              <img src={work3} alt="" className="details-img" />
              <div className="details-content">
                <div className="details-featured">
                  Featured - <span>Web</span>
                </div>
                <h3 className="details-title">
                  Web for technologies & details{" "}
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa voluptatem laudantium neque sapiente
                </p>
                <ul className="details-info">
                  <li>
                    Created - <span>4 Dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>Html Css</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">www.domain.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-card all web">
          <img className="card-img" src={work4} alt="" />
          <h3 className="card-title">Web Development</h3>
          <span onClick = {() => {
                  Modal(4);
                }} className="card-button">
            Demo
            <i className="bx bx-right-arrow-alt card-button-icon"></i>
          </span>
          <div className={modalToggle === 4 ? "portfolio-modal active-modal" : "portfolio-modal "}>
            <div className="portfolio-card-details">
              <i
                onClick={() => {
                  Modal(0);
                }}
                className="bx bx-x details-modal-close"
              ></i>
              <img src={work4} alt="" className="details-img" />
              <div className="details-content">
                <div className="details-featured">
                  Featured - <span>Web</span>
                </div>
                <h3 className="details-title">
                  Web for technologies & details{" "}
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa voluptatem laudantium neque sapiente
                </p>
                <ul className="details-info">
                  <li>
                    Created - <span>4 Dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>Html Css</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">www.domain.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-card all app">
          <img className="card-img" src={work5} alt="" />
          <h3 className="card-title">Web Development</h3>
          <span onClick = {() => {
                  Modal(5);
                }} className="card-button">
            Demo
            <i className="bx bx-right-arrow-alt card-button-icon"></i>
          </span>
          <div className={modalToggle === 5 ? "portfolio-modal active-modal" : "portfolio-modal "}>
            <div className="portfolio-card-details">
              <i
                onClick={() => {
                  Modal(0);
                }}
                className="bx bx-x details-modal-close"
              ></i>
              <img src={work5} alt="" className="details-img" />
              <div className="details-content">
                <div className="details-featured">
                  Featured - <span>Web</span>
                </div>
                <h3 className="details-title">
                  Web for technologies & details{" "}
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa voluptatem laudantium neque sapiente
                </p>
                <ul className="details-info">
                  <li>
                    Created - <span>4 Dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>Html Css</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">www.domain.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-card all support">
          <img className="card-img" src={work2} alt="" />
          <h3 className="card-title">Web Development</h3>
          <span onClick = {() => {
                  Modal(6);
                }} className="card-button">
            Demo
            <i className="bx bx-right-arrow-alt card-button-icon"></i>
          </span>
          <div className={modalToggle === 6 ? "portfolio-modal active-modal" : "portfolio-modal "}>
            <div className="portfolio-card-details">
              <i
                onClick={() => {
                  Modal(0);
                }}
                className="bx bx-x details-modal-close"
              ></i>
              <img src={work2} alt="" className="details-img" />
              <div className="details-content">
                <div className="details-featured">
                  Featured - <span>Web</span>
                </div>
                <h3 className="details-title">
                  Web for technologies & details{" "}
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit culpa voluptatem laudantium neque sapiente
                </p>
                <ul className="details-info">
                  <li>
                    Created - <span>4 Dec 2020</span>
                  </li>
                  <li>
                    Technologies - <span>Html Css</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View -{" "}
                    <span>
                      <a href="#">www.domain.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
