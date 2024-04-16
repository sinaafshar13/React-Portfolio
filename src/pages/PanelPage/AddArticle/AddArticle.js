import React, { useState } from "react";

import "./AddArticle.css";
import axios from "axios";
const AddArticle = () => {
  // modal control
  const [modalToggle, setModalToggle] = useState(0);
  const ModalClose = () => {
    setModalToggle(0);
  };
  // post article
  const resetFormData = () => {
    setFormData({
      title: "",
      writer: "",
      desc: "",
      image: "",
      readingTime: "",
      category: "",
    });
  };

  const [formData, setFormData] = useState({});
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const articleHandler = () => {
    // Check if any required field is empty
    const requiredFields = [
      "title",
      "desc",
      "writer",
      "category",
      "image",
      "readingTime",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      // If any required field is empty, display an error modal
      setModalToggle(2); // Setting modalToggle to 2 to display error modal
      return; // Stop further execution
    }
    axios
      .post("http://localhost:5000/articles", formData)
      .then((response) => {
        if (response.status === 201) {
          setModalToggle(1);
        }
      })
      .catch((error) => {
        console.log(error);
        setModalToggle(2);
      });
    resetFormData();
  };

  return (
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
                ? "New Article Added Successfully."
                : "Something went wrong."}
            </p>
          </div>
        </div>
        <div className="addArticle-container">
          <form action="">
            <h1 className="addArticle-title">Add Article</h1>
            <p className="addArticle-desc">
              Add Article to your articles section
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
              <label htmlFor="desc" className="addArticle-form-tag">
                Description:{" "}
              </label>
              <input
                name="desc"
                value={formData.desc}
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
              Add Article
              <i className="bx bx-log-in addArticle-button-icon button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddArticle;
