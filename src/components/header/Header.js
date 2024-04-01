import { useState } from "react";
import "./Header.css";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("header-border");
    else header.classList.remove("header-border");
  });
  const [toggle, setToggle] = useState(false);
  const ShowMenu = () => {
    setToggle(!toggle);
  };
  const [active, setActive] = useState();
  const activeLink = index => {
    setActive(index);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav-logo">
          Sina Afshari
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a onClick={()=>{activeLink("#home")}} href="#home" className={active === "#home" ? "nav-link active-link" : "nav-link"}>
                <i className="bi bi-house nav-icon"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{activeLink("#about")}} href="#about" className={active === "#about" ? "nav-link active-link" : "nav-link"}>
                <i className="bi bi-person-vcard nav-icon"></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{activeLink("#skills")}} href="#skills" className={active === "#skills" ? "nav-link active-link" : "nav-link"}>
                <i className="bi bi-file-earmark-text nav-icon"></i>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{activeLink("#services")}} href="#services" className={active === "#services" ? "nav-link active-link" : "nav-link"}>
                <i className="bi bi-briefcase  nav-icon"></i>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{activeLink("#portfolio")}} href="#portfolio" className={active === "#portfolio" ? "nav-link active-link" : "nav-link"}>
                <i className="bi bi-image nav-icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{activeLink("#contact")}} href="#contact" className={active === "#contact" ? "nav-link active-link" : "nav-link"}>
                <i className="bi bi-send nav-icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i onClick={ShowMenu} className="bi bi-x nav-close"></i>
        </div>
        <div onClick={ShowMenu} className="nav-toggle">
          <i className="bi bi-grid"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
