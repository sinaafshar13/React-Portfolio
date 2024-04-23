import Footer from "../../../components/Footer/Footer";
import ScrollUp from "../../../components/ScrollUp/ScrollUp";
import PanelHeader from "../../../components/PanelHeader/PanelHeader"
import React, { useState, useEffect } from "react";
import "../AddArticle/AddArticle.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditArticle = () => {
  const [modalToggle, setModalToggle] = useState(0);
  const ModalClose = () => {
    setModalToggle(0);
  };
  // post article
  const { articleId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setFormData(response.data.data[0]))
      .catch((error) => console.error("Error fetching article:", error));
  }, []);
  const [formData, setFormData] = useState({});
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const articleHandler = () => {
    axios.put(`http://localhost/react/api/articles/?id=${articleId}`, formData);
    setModalToggle(1);
  };
  return (
    <>
      <PanelHeader />
      <main className="main section mt-3">
        <section className="addArticle-page" id="addArticle-page">
          <div className="addArticle">
            <div
              className={
                modalToggle === 1 || modalToggle === 2
                  ? "addArticle-modal active-modal"
                  : "addArticle-modal"
              }
            >
              <div className="addArticle-modal-content">
                <i
                  onClick={ModalClose}
                  className="bx bx-x addArticle-modal-close"
                ></i>

                <h3 className="addArticle-modal-title">
                  {modalToggle === 1 ? "congratulations" : "!Oops"}
                </h3>
                <p className="addArticle-modal-desc">
                  {modalToggle === 1
                    ? "Your Article has been changed Successfully."
                    : "Something went wrong."}
                </p>
              </div>
            </div>
            <div className="addArticle-container">
              <form action="">
                <h1 className="addArticle-title">Edit Article</h1>
                <p className="addArticle-desc">
                  Edit article of your articles section
                </p>
                <div className="addArticle-input">
                  <label htmlFor="title" className="addArticle-form-tag">
                    Title:{" "}
                  </label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={formHandler}
                    type="text"
                    placeholder="Insert title"
                    required
                  />
                </div>
                <div className="addArticle-input">
                  <label htmlFor="description" className="addArticle-form-tag">
                    Description:{" "}
                  </label>
                  <input
                    name="description"
                    value={formData.description}
                    onChange={formHandler}
                    type="text"
                    placeholder="Insert  description"
                    required
                  />
                </div>
                <div className="addArticle-input">
                  <label htmlFor="writer" className="addArticle-form-tag">
                    Writer:{" "}
                  </label>
                  <input
                    name="writer"
                    value={formData.writer}
                    onChange={formHandler}
                    type="text"
                    placeholder="Insert Writer"
                    required
                  />
                </div>
                <div className="addArticle-input">
                  <label htmlFor="category" className="addArticle-form-tag">
                    Category:{" "}
                  </label>
                  <input
                    name="category"
                    value={formData.category}
                    onChange={formHandler}
                    type="text"
                    placeholder="Insert category"
                    required
                  />
                </div>
                <div className="addArticle-input">
                  <label htmlFor="image" className="addArticle-form-tag">
                    Image:{" "}
                  </label>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={formHandler}
                    type="text"
                    placeholder="Insert image"
                    required
                  />
                </div>
                <div className="addArticle-input">
                  <label htmlFor="readingTime" className="addArticle-form-tag">
                    Duration:{" "}
                  </label>
                  <input
                    name="readingTime"
                    value={formData.readingTime}
                    onChange={formHandler}
                    type="number"
                    placeholder="Insert reading duration  "
                    required
                  />
                </div>
                <button
                  onClick={articleHandler}
                  type="button"
                  className="button addArticle-button button-flex"
                >
                  Edit Article
                  <i className="bx bx-log-in addArticle-button-icon button-icon"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default EditArticle;
