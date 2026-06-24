import React from "react";
import Footer from "../../components/Footer/Footer";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import PortfolioData from "./PortfolioData";
import { projects } from "./WorkData";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const PortfolioPages = () => {
  const portfolioId = useParams().portfolioId;
  const portfolioInfo = projects.find((project) => project.id ==  portfolioId);
  return (
    <>
      <Navbar />
      <main className="main">
        <br />
        <br />
        <br />
        <br />
        <br />
        <PortfolioData  {...portfolioInfo}/>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default PortfolioPages;
