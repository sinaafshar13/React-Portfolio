import React, { useState } from "react";
import { Link } from "react-router-dom";
const ArticleItem = ({
  id,
  title,
  desc,
  image,
  readingTime,
  writer,
  category,
}) => {
  const [modalToggle, setModalToggle] = useState(0);
  const Modal = (index) => {
    setModalToggle(index);
  };
  return (
    <div className={`articles-card all ${category}`}>
      <img className="article-img" src={image} alt="" />
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-desc">{desc}</p>
        <Link to={`/panelPage/articlePage/${id}`} className="article-button">
          {" "}
          View article
          <i className="bx bx-right-arrow-alt article-button-icon"></i>
        </Link>
        <div className="article-footer">
          <span className="footer-writer">
            <i className="bx bx-user writer-icon">:</i>
            {writer}
          </span>
          <span className="footer-clock">
            {readingTime} min
            <i className="bx bx-time clock-icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
