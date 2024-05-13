import React from "react";
import { Link } from "react-router-dom";
import "./CourseItem.css";
const CourseItem = ({
  id,
  title,
  description,
  image,
  teacher,
  studentCount,
  mainPrice,
  category,
}) => {
  return (
    <div className={`courses-card ${category}`}>
      <div className="course-card-img">
        <img className="course-img" src={image} alt="" />
        <span className="course-users">
          <i className="bx bxs-user-account">:</i>
          {studentCount}
        </span>
      </div>
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-desc">{description}</p>
        <p className="course-teacher">
          <i className="bx bxs-graduation course-teacher-icon">:</i>
          {teacher}
        </p>
        <div className="course-footer">
          <span className="footer-button">
            <Link
              to={`/panelPage/coursePage/${id}`}
              className="course-button button button-flex"
            >
              {" "}
              Purchase
            </Link>
          </span>
          <span className="footer-price">
            {mainPrice}
            <i className="bx bx-dollar-circle footer-price-icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
