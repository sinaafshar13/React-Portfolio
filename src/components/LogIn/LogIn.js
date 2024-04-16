import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [modalToggle, setModalToggle] = useState(0);
  const ModalClose = () => {
    setModalToggle(0);
  };

  const submitHandler = () => {
    if (username == "admin" && password == "12345") {
      document.cookie = "username=admin; expires=Thu, 18 Dec 2028 12:00:00 UTC; path=/";
      navigate("/panelPage/articles");
    } else {
      setModalToggle(1);
    }
  };
  return (
    <section className="section login-page" id="login-page">
      <div className="login">
        <div
          className={
            modalToggle === 1 ? "login-modal active-modal" : "login-modal"
          }
        >
          <div className="login-modal-content">
            <i onClick={ModalClose} className="bx bx-x login-modal-close"></i>

            <h3 className="login-modal-title">!Wrong</h3>
            <p className="login-modal-desc">
              The username or password you entered is incorrect. Please try
              again.{" "}
            </p>
          </div>
        </div>
        <div className="login-container">
          <form action="">
            <h1 className="login-title">LogIn</h1>

            <div className="login-input">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Insert your username"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="login-input">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Insert your password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button
              onClick={submitHandler}
              type="button"
              className="button login-button button-flex"
            >
              Login
              <i className="bx bx-log-in login-button-icon button-icon"></i>
            </button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register here!</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
