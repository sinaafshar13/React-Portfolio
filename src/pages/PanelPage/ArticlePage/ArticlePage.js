import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import PanelHeader from "../../../components/PanelHeader/PanelHeader"
import ScrollUp from "../../../components/ScrollUp/ScrollUp";
import "./ArticlePage.css";
import axios from "axios";
import ArticleBio from "./ArticleBio";
const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setArticle(response.data.data[0]))
      .catch((error) => console.error("Error fetching article:", error));
  }, []);

  return (
    <>
      <PanelHeader />
      <main className="main section">
        <div className="articlePage-container container">
          <div className={`all ${article.category}`}>
            <ArticleBio {...article} />
          </div>
          <div className="articlePage-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            laoreet id donec ultrices tincidunt arcu. Habitasse platea dictumst
            vestibulum rhoncus. Sit amet luctus venenatis lectus magna fringilla
            urna porttitor rhoncus. Viverra nibh cras pulvinar mattis nunc sed
            blandit. Nisi scelerisque eu ultrices vitae auctor. Aliquet nibh
            praesent tristique magna sit amet purus gravida quis. Enim lobortis
            scelerisque fermentum dui faucibus in. Egestas erat imperdiet sed
            euismod nisi. Nunc id cursus metus aliquam eleifend mi. Pellentesque
            eu tincidunt tortor aliquam nulla facilisi. Massa id neque aliquam
            vestibulum morbi blandit. Enim nec dui nunc mattis enim. Ut aliquam
            purus sit amet luctus venenatis lectus magna. Elit eget gravida cum
            sociis natoque. Dui ut ornare lectus sit amet est placerat in
            egestas. Pellentesque elit eget gravida cum. Scelerisque felis
            imperdiet proin fermentum leo vel. Euismod elementum nisi quis
            eleifend quam adipiscing vitae. Adipiscing at in tellus integer
            feugiat scelerisque. Mauris ultrices eros in cursus turpis massa
            tincidunt. Magnis dis parturient montes nascetur ridiculus mus
            mauris vitae. Aliquam eleifend mi in nulla. Viverra adipiscing at in
            tellus integer feugiat scelerisque. Tellus in hac habitasse platea
            dictumst. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.
            Et netus et malesuada fames ac turpis. Mauris nunc congue nisi
            vitae. Ut enim blandit volutpat maecenas volutpat. Suspendisse in
            est ante in nibh mauris cursus mattis. Tempor orci dapibus ultrices
            in iaculis nunc sed. In dictum non consectetur a. Volutpat sed cras
            ornare arcu dui. Velit egestas dui id ornare. Lectus magna fringilla
            urna porttitor. Amet aliquam id diam maecenas ultricies mi eget
            mauris pharetra. Ut placerat orci nulla pellentesque dignissim enim
            sit amet. Gravida quis blandit turpis cursus. Amet aliquam id diam
            maecenas ultricies mi eget. Venenatis tellus in metus vulputate eu
            scelerisque. Massa eget egestas purus viverra accumsan in. Eget mi
            proin sed libero enim sed faucibus. Vestibulum morbi blandit cursus
            risus at ultrices mi tempus. Congue eu consequat ac felis donec et.
            Id ornare arcu odio ut sem nulla pharetra diam. Scelerisque
            fermentum dui faucibus in. Tempor orci eu lobortis elementum. Quam
            viverra orci sagittis eu. Ultrices gravida dictum fusce ut placerat
            orci nulla pellentesque. Sed augue lacus viverra vitae congue eu
            consequat ac felis. Commodo ullamcorper a lacus vestibulum. Velit
            scelerisque in dictum non consectetur. Ultrices neque ornare aenean
            euismod elementum nisi quis eleifend quam. In metus vulputate eu
            scelerisque felis imperdiet proin. Maecenas sed enim ut sem. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam. Pulvinar neque
            laoreet suspendisse interdum consectetur libero id faucibus nisl.
            Suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget. Sit amet consectetur adipiscing elit pellentesque habitant
            morbi. Pulvinar proin gravida hendrerit lectus. At auctor urna nunc
            id cursus metus aliquam. Sem integer vitae justo eget. Nec tincidunt
            praesent semper feugiat nibh sed pulvinar proin gravida. Tortor
            dignissim convallis aenean et tortor at risus viverra adipiscing.
            Luctus accumsan tortor posuere ac ut. Nulla porttitor massa id neque
            aliquam vestibulum morbi. Nisl condimentum id venenatis a
            condimentum. Mattis aliquam faucibus purus in massa. Eu nisl nunc mi
            ipsum faucibus. Sed arcu non odio euismod lacinia at quis. Mi proin
            sed libero enim sed faucibus turpis in eu. Aliquam malesuada
            bibendum arcu vitae. Nullam non nisi est sit.
          </div>
        </div>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ArticlePage;
