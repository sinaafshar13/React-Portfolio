import React from "react";
import "./PortfolioPages.css"
import { Link } from "react-router-dom";
const PortfolioData = (
  {id,
  img,
  featured,
  portfolioTitle,
  portfolioDesc,
  created,
  technologies,
  role}
) => {
  return (
    <div className="portfolio-details container">
      <img src={img} alt="" className="portfolio-img" />
      <div className="portfolio-content">
        <div className="portfolio-featured">
          Featured - <span>{featured}</span>
        </div>
        <h3 className="portfolio-title">{portfolioTitle}</h3>
        <p className="portfolio-desc">{portfolioDesc}</p>
        <ul className="portfolio-info">
          <li>
            Created - <span>{created}</span>
          </li>
          <li>
            Technologies - <span>{technologies}</span>
          </li>
          <li>
            Role - <span>{role}</span>
          </li>
          <li>
            View -{" "}
            <span>
              <Link to={`/portfolio/${id}`}>www.domain.com</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioData;
