import React, { useEffect, useState } from "react";
import Mixitup from "mixitup";
import "./Articles.css";
import axios from "axios";
import ArticleItem from "../../../components/ArticlesItem/ArticleItem";
const Articles = () => {
  //get api
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/")
      .then((response) => setArticles(response.data.data));
  }, []);
  // TODO mixitup
  useEffect(() => {
    Mixitup(".articles-container", {
      selectors: {
        target: ".articles-card",
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
  return (
    <section className="articles" id="articles">
      <h2 className="section-title"> Articles </h2>
      <span className="section-sub mb-1">My introduction</span>
      <div className="articles-pages">
        <div className="div articles-filters">
          <span
            onClick={() => toggleFilter(0)}
            className={
              itemToggle === 0
                ? "articles-filter articles-filter-active"
                : "articles-filter"
            }
            data-filter=".all"
          >
            All
          </span>
          <span
            onClick={() => toggleFilter(1)}
            className={
              itemToggle === 1
                ? "articles-filter articles-filter-active"
                : "articles-filter"
            }
            data-filter=".web"
          >
            Web
          </span>
          <span
            onClick={() => toggleFilter(2)}
            className={
              itemToggle === 2
                ? "articles-filter articles-filter-active"
                : "articles-filter"
            }
            data-filter=".app"
          >
            App
          </span>
          <span
            onClick={() => toggleFilter(3)}
            className={
              itemToggle === 3
                ? "articles-filter articles-filter-active"
                : "articles-filter"
            }
            data-filter=".support"
          >
            Support
          </span>
        </div>
      </div>
      <div className="articles-container container">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`all ${article.category}`}
            data-filter={article.category}
          >
            <ArticleItem {...article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
