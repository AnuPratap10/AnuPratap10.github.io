import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";
import GithubStatic from "./GithubStatic";
import GithubStats from "./GithubStats";
import MyNavbar from "./MyNavbar";
function Main() {
  return (
    <div>
      <Landing />
      <About />
      <Education />
      <Skills />
      <GithubStatic />
      <Projects />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
