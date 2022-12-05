import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";
import MyNavbar from "./pages/Main/MyNavbar";
import GithubStats from "./pages/Main/GithubStats";
import ProjectCard from "./components/projectscard/ProjectCard";

// import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(
    "%cDEVELOPER PORTFOLIO",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/hhhrrrttt222111/developer-portfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <MyNavbar />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
      {/* <ProjectCard /> */}
    </div>
  );
}

export default App;
