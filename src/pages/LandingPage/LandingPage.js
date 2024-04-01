import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Portfolio from "../../components/Portfolio/Portfolio";
import Qualification from "../../components/Qualification/Qualification";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
export default LandingPage;
