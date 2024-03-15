import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const ShowMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav-logo">
          Afshari
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <i className="bi bi-house nav-icon"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="bi bi-person-vcard nav-icon"></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="bi bi-file-earmark-text nav-icon"></i>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="bi bi-briefcase  nav-icon"></i>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="bi bi-image nav-icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="bi bi-send nav-icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i onClick={ShowMenu} className="bi bi-x nav-close"></i>
        </div>
        <div onClick={ShowMenu} className="nav-toggle" >
          <i className="bi bi-grid"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
