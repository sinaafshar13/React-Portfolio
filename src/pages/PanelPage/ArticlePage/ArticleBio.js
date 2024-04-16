import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArticleBio = ({
  id,
  title,
  desc,
  image,
  readingTime,
  writer,
  category,
}) => {
  const navigate = useNavigate();
  const deleteArticleHandler = (id) => {
    console.log(` ${id}`);
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "hsl(var(--hue), var(--sat), 20%",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/articles/${id}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your article has been deleted.",
          confirmButtonColor: "hsl(var(--hue), var(--sat), 20%",
          confirmButtonText: "ok",
        });
        navigate("/panelPage/articles");
      }
    });
  };

  return (
    <div className={`articleBio-card all ${category}`}>
      <img className="articleBio-img" src={image} alt="" />
      <div className="articleBio-content">
        <h3 className="articleBio-title">{title}</h3>
        <p className="articleBio-desc">{desc}</p>
        <ul className="articleBio-info">
          <li>
            <i className="bx bx-edit-alt articleBio-info-icon"></i>
            Writer : <span>{writer}</span>
          </li>
          <li>
            <i className="bx bx-time-five articleBio-info-icon"></i>
            Reading time : <span>{readingTime} min</span>
          </li>
          <li>
            <i className="bx bx-category articleBio-info-icon"></i>
            Category : <span>{category}</span>
          </li>
        </ul>
        <div className="articleBio-button-container">
          <Link to={`/panelPage/editArticle/${id}`}>
            <button className="button articleBio-button button-flex">
              Edit
              <i className="bx bxs-edit articleBio-button-icon"></i>
            </button>
          </Link>
          <button
            onClick={() => deleteArticleHandler(id)}
            className="button articleBio-button-delete button-flex"
          >
            Delete
            <i className="bx bx-trash articleBio-button-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleBio;
