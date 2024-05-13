import React, { useEffect, useState, useRef } from "react";
import Mixitup from "mixitup";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import CourseItem from "../../components/CourseItem/CourseItem";
import "./CoursesList.css";
const CoursesList = () => {
  //get api
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [search, setSearch] = useState("");
  const accordionRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (index) => {
    if (accordionRef.current && !accordionRef.current.contains(index.target)) {
      setItems((prevState) =>
        prevState.map((item, i) =>
          i === index
            ? { ...item, isOpen: !item.isOpen }
            : { ...item, isOpen: false }
        )
      );
    }
  };
  useEffect(() => {
    setItemToggle(0);
    if (sortType === "earliest") getCoursesByOrder("id", "asc");
    else if (sortType === "latest") getCoursesByOrder("id", "desc");
    else if (sortType === "high-price") getCoursesByOrder("mainPrice", "desc");
    else if (sortType === "low-price") getCoursesByOrder("mainPrice", "asc");
  }, [sortType]);

  const sortHandler = (e) => {
    setSortType(e.target.value);
  };
  const getCoursesByOrder = (column, order) => {
    axios
      .get(
        `http://localhost/react/api/courses/?column=${column}&order=${order}`
      )
      .then((response) => setCourses(response.data.data));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const getCoursesBySearch = () => {
    axios
      .get(
        `http://localhost/react/api/courses/?column=teacher&search=${search}`
      )
      .then((response) => setCourses(response.data.data));
  };
  // TODO mixitup
  // useEffect(() => {
  //   Mixitup(".courses-container", {
  //     selectors: {
  //       target: ".courses-card",
  //     },
  //     animation: {
  //       duration: 500,
  //     },
  //   });
  // }, []);
  // active portfolio item
  const [itemToggle, setItemToggle] = useState(0);
  const toggleFilter = (index) => {
    setItemToggle(index);
    if (index === 0) getCoursesByOrder("id", "asc");
    else if (index === 1) getCoursesByCategory("Frontend");
    else if (index === 2) getCoursesByCategory("Backend");
  };
  const getCoursesByCategory = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };
  // ==========> accordion <==========
  const [items, setItems] = useState([
    {
      title: "Sorting courses",
      content: (
        <div className="accordion-content-texts">
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="earliest"
            />
            <span className="accordion-content-text">earliest</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="latest"
            />
            <span className="accordion-content-text">latest</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="low-price"
            />
            <span className="accordion-content-text">low Price</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="high-price"
            />
            <span className="accordion-content-text">high Price</span>
          </label>
        </div>
      ),
      isOpen: false,
    },
    {
      title: "Fields ",
      content: (
        <div className="accordion-content-texts">
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="Earliest"
            />
            <span className="accordion-content-text">Earliest</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="latest"
            />
            <span className="accordion-content-text">Latest</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="high-price"
            />
            <span className="accordion-content-text">high-price</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="low-price"
            />
            <span className="accordion-content-text">low-price</span>
          </label>
        </div>
      ),
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setItems((prevState) =>
      prevState.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  return (
    <>
      <PanelHeader />
      <main className="main section">
        <section className="courses container mb-1" id="courses">
          <div className="coursesList-header-container">
            <h2 className="section-title">Courses List</h2>
            <div className="coursesList-search-container">
              <input
                onChange={searchHandler}
                type="text"
                className="search-container-input"
              />
              <button
                onClick={getCoursesBySearch}
                className="button button-flex search-container-button"
              >
                <i className="bx bx-search search-container-button-icon"></i>
                Search
              </button>
            </div>
          </div>

          <div className="courses-pages">
            <div className="div courses-filters">
              <span
                onClick={() => toggleFilter(0)}
                className={
                  itemToggle === 0
                    ? "courses-filter courses-filter-active"
                    : "courses-filter"
                }
                // data-filter=".all"
              >
                All
              </span>
              <span
                onClick={() => toggleFilter(1)}
                className={
                  itemToggle === 1
                    ? "courses-filter courses-filter-active"
                    : "courses-filter"
                }
                // data-filter=".web"
              >
                Frontend
              </span>
              <span
                onClick={() => toggleFilter(2)}
                className={
                  itemToggle === 2
                    ? "courses-filter courses-filter-active"
                    : "courses-filter"
                }
                // data-filter=".app"
              >
                Backend
              </span>
            </div>
          </div>
          <div className="coursesList-section">
            <div className="coursesList-accordion">
              <div className="accordion">
                {items.map((item, index) => (
                  <div key={index} className={"accordion-item"}>
                    <div
                      className={
                        item.isOpen
                          ? "accordion-header open"
                          : "accordion-header"
                      }
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                      <span>
                        {item.isOpen ? (
                          <i className="bx bxs-chevron-up"></i>
                        ) : (
                          <i className="bx bxs-chevron-down"></i>
                        )}
                      </span>
                    </div>
                    <div
                      className={
                        item.isOpen
                          ? "accordion-content show-content"
                          : "accordion-content"
                      }
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {courses.length === 0 ? (
              <p className="empty-search-alert">
                !!!Sorry we don't find any article that match... try again
                please
              </p>
            ) : (
              <div className="coursesList-container">
                {courses.map((course) => (
                  <div key={course.id} className={`all ${course.category}`}>
                    <CourseItem {...course} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default CoursesList;
