import React, {useContext} from "react";

import "./About.css";
import {ThemeContext} from "../../contexts/ThemeContext";
import {aboutData} from "../../data/aboutData";

function About() {
  const {theme} = useContext(ThemeContext);
  return (
    <div
      id="about"
      className="abouts sections"
      name="about"
      style={{backgroundColor: theme.secondary}}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{backgroundColor: theme.primary}}
        ></div>
        <div
          className="style-circle"
          style={{backgroundColor: theme.primary}}
        ></div>
        <div
          className="style-line"
          style={{backgroundColor: theme.primary}}
        ></div>
      </div>
      <div id="about" className="about-body">
        <div className="about-description">
          <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
          <p style={{color: theme.tertiary80}}>
            <p id="user-detail-name">  {aboutData.description1}</p>
          
            <br />
            <p id="user-detail-intro">  {aboutData.description2}</p>
          
          </p>
        </div>
        <div className="about-img">
          <img
            src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
