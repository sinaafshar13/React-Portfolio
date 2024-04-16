import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { isLogin } from "../../utils";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY > 80) header.classList.add("header-border");
    else header.classList.remove("header-border");
  });
  const [toggle, setToggle] = useState(false);
  const ShowMenu = () => {
    setToggle(!toggle);
  };
  const [active, setActive] = useState();
  const activeLink = (index) => {
    setActive(index);
  };
  // login and logout status
  const [loginStatus, setLoginStatus] = useState(
    isLogin() ? "Log Out" : "Log In"
  );
  const handleLogOut = () => {
    document.cookie =
      "username=admin; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    setLoginStatus("Log In");
  };
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo">
          Sina Afshari
        </Link>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a
                onClick={() => {
                  activeLink("#home");
                }}
                href="/#home"
                className={
                  active === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-house nav-icon"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  activeLink("#about");
                }}
                href="#about"
                className={
                  active === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-person-vcard nav-icon"></i>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  activeLink("#services");
                }}
                href="/#services"
                className={
                  active === "#services" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-briefcase  nav-icon"></i>
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => {
                  activeLink("#portfolio");
                }}
                to="/#portfolio"
                className={
                  active === "#portfolio" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-image nav-icon"></i>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  activeLink("#contact");
                }}
                href="#contact"
                className={
                  active === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-send nav-icon"></i>
                Contact
              </a>
            </li>
            <li className="nav-item">
              {isLogin() ? (
                <Link
                  onClick={() => {
                    activeLink("#login");
                    handleLogOut();
                  }}
                  to="/loginPage"
                  className={
                    active === "#login" ? "nav-link active-link" : "nav-link"
                  }
                >
                  <i className="bi bi-box-arrow-in-right nav-icon"></i>
                  {loginStatus}
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    activeLink("#login");
                  }}
                  to="/loginPage"
                  className={
                    active === "#login" ? "nav-link active-link" : "nav-link"
                  }
                >
                  <i className="bi bi-box-arrow-in-right nav-icon"></i>
                  {loginStatus}
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link
                onClick={() => {
                  activeLink("#panel");
                }}
                to="/panelPage/articles"
                className={
                  active === "#panel" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="bi bi-person nav-icon"></i>
                Panel
              </Link>
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
