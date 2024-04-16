import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import "./PanelPage.css"
import { Link , Outlet } from "react-router-dom";

const PanelPage = () => {
  const [itemToggle, setItemToggle] = useState(0);
  const toggleFilter = (index) => {
    setItemToggle(index);
  };

  return (
    <>
      <Header />
      <main className="main section">
        <div className="div panel-filters">
          <Link
            to="/panelPage/articles"
            onClick={() => toggleFilter(0)}
            className={
              itemToggle === 0
                ? "panel-filter panel-filter-active"
                : "panel-filter"
            }
          >
            Articles
          </Link>
          <Link
            to="/panelPage/addArticle"
            onClick={() => toggleFilter(1)}
            className={
              itemToggle === 1
                ? "panel-filter panel-filter-active"
                : "panel-filter"
            }
          >
            Add Article
          </Link>
        </div>
        <Outlet />
        {/* Place your content here */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default PanelPage;
