import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import PortfolioPages from "./pages/PortfolioPages/PortfolioPages";
import PanelPage from "./pages/PanelPage/PanelPage";
import PrivateRoutes from "./components/PrivateRoutes";
import AddArticle from "./pages/PanelPage/AddArticle/AddArticle";
import EditArticle from "./pages/PanelPage/EditArticle/EditArticle";
import Articles from "./pages/PanelPage/Articles/Articles";
import ArticlePage from "./pages/PanelPage/ArticlePage/ArticlePage";
import JourneyJournal from "./pages/JourneyJournal/JourneyJournal";
import ArticlesList from "./pages/ArticlesList/ArticlesList";
import CoursesList from "./pages/CoursesList/CoursesList";
const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/loginPage", element: <LogInPage /> },
  { path: "/portfolio/:portfolioId", element: <PortfolioPages /> },
  {
    path: "/JourneyJournal",
    element: (
      <PrivateRoutes>
        <JourneyJournal />
      </PrivateRoutes>
    ),
  },
  {
    path: "/articlesList",
    element: (
      <PrivateRoutes>
        <ArticlesList />
      </PrivateRoutes>
    ),
  },
  {
    path: "/coursesList",
    element: (
      <PrivateRoutes>
        <CoursesList />
      </PrivateRoutes>
    ),
  },
  {
    path: "/panelPage/*",
    element: (
      <PrivateRoutes>
        <PanelPage />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "articles",
        element: (
          <PrivateRoutes>
            <Articles />
          </PrivateRoutes>
        ),
      },
      {
        path: "addArticle",
        element: (
          <PrivateRoutes>
            <AddArticle />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/panelPage/articlePage/:articleId",
    element: (
      <PrivateRoutes>
        <ArticlePage />
      </PrivateRoutes>
    ),
  },
  {
    path: "/panelPage/editArticle/:articleId",
    element: (
      <PrivateRoutes>
        <EditArticle />
      </PrivateRoutes>
    ),
  },
];

export default routes;
