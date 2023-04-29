import React, {useContext} from "react";
import {Button} from "@material-ui/core";
import {NavHashLink as NavLink} from "react-router-hash-link";
import {makeStyles} from "@material-ui/core/styles";
import {Typewriter} from "react-simple-typewriter";
import "./Landing.css";
import {ThemeContext} from "../../contexts/ThemeContext";
import {headerData} from "../../data/headerData";
import {socialsData} from "../../data/socialsData";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  const {theme, drawerOpen} = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div id="home" className="landing" name="home">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{backgroundColor: theme.primary}}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{color: theme.secondary}}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{color: theme.secondary}}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{color: theme.secondary}}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube
                  className="landing--social"
                  style={{color: theme.secondary}}
                  aria-label="YouTube"
                />
              </a>
            )}
            {socialsData.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                <FaBlogger
                  className="landing--social"
                  style={{color: theme.secondary}}
                  aria-label="Blogger"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          // className="landing--img"
          className="home-img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
            objectFit: "cover",
          }}
        />
        <div
          className="landing--container-right"
          style={{backgroundColor: theme.secondary}}
        >
          <div className="lcr--content" style={{color: theme.tertiary}}>
            <h6>
              <span style={{color: "yellow-green", fontWeight: "bold"}}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Full Stack Web Developer",
                    "React Developer",
                    "MERN-Stack",
                    "Web Developer",
                    "Self Beliver ❤️",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="*"
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={1000}
                  //   onLoopDone={handleDone}
                  //   onType={handleType}
                />
              </span>
            </h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="Anu_Pratap_Singh_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button id="resume-button-2" className={classes.resumeBtn}>
                    Resume
                  </Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
