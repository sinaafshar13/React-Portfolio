import About from "../../components/About/About.js";
import Contact from "../../components/Contact/Contact.js";
import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js"
import Home from "../../components/Home/Home.js";
import Portfolio from "../../components/Portfolio/Portfolio.js";
import Qualification from "../../components/Qualification/Qualification.js";
import ScrollUp from "../../components/ScrollUp/ScrollUp.js";
import Services from "../../components/Services/Services.js";
import Skills from "../../components/Skills/Skills.js";
import Testimonials from "../../components/Testimonials/Testimonials.js";
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
