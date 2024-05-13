import React  from "react";
import { Link } from "react-router-dom";
import "./ArticlesItem.css"
const ArticleItem = ({
  id,
  title,
  description,
  image,
  readingTime,
  writer
}) => {
  return (
    <div className="articles-card">
      <img className="article-img" src={image} alt="" />
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-desc">{description}</p>
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
