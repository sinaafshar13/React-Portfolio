import React, { useEffect, useState } from "react";
import Mixitup from "mixitup";
import axios from "axios";
import ArticleItem from "../../pages/PanelPage/Articles/ArticleItem";
import Footer from "../../components/Footer/Footer";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import PanelHeader from "../../components/PanelHeader/PanelHeader";

import "./ArticlesList.css";
const ArticlesList = () => {
  //get api
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (sortType === "earliest") getArticlesByOrder("id", "desc");
    else if (sortType === "latest") getArticlesByOrder("id", "asc");
    else if (sortType === "longest") getArticlesByOrder("readingTime", "desc");
    else if (sortType === "shortest") getArticlesByOrder("readingTime", "asc");
  }, [sortType]);
  const sortHandler = (e) => {
    setSortType(e.target.value);
  };
  const getArticlesByOrder = (column, order) => {
    axios
      .get(
        `http://localhost/react/api/articles/?column=${column}&order=${order}`
      )
      .then((response) => setArticles(response.data.data));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const getArticlesBySearch = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?column=writer&search=${search}`
      )
      .then((response) => setArticles(response.data.data));
  };
  // TODO mixitup
  // useEffect(() => {
  //   Mixitup(".articles-container", {
  //     selectors: {
  //       target: ".articles-card",
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
  };
  // ==========> accordion <==========
  const [items, setItems] = useState([
    {
      title: "Sorting articles",
      content: (
        <div className="accordion-content-texts">
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="earliest"
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
              value="longest"
            />
            <span className="accordion-content-text">Longest</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="shortest"
            />
            <span className="accordion-content-text">Shortest</span>
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
              value="longest"
            />
            <span className="accordion-content-text">Longest</span>
          </label>
          <label>
            <input
              onChange={sortHandler}
              type="radio"
              name="sorting"
              value="shortest"
            />
            <span className="accordion-content-text">Shortest</span>
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
        <section className="articles container mb-1" id="articles">
          <div className="articlesList-header-container">
            <h2 className="section-title">Articles List</h2>
            <div className="articlesList-search-container">
              <input
                onChange={searchHandler}
                type="text"
                className="search-container-input"
              />
              <button
                onClick={getArticlesBySearch}
                className="button button-flex search-container-button"
              >
                <i className="bx bx-search search-container-button-icon"></i>
                Search
              </button>
            </div>
          </div>

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
          <div className="articlesList-section">
            <div className="articlesList-accordion">
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
            {articles.length === 0 ? (
              <p className="empty-search-alert">
                !Sorry we don't find any article that match... try again please
              </p>
            ) : (
              <div className="articlesList-container">
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
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ArticlesList;
