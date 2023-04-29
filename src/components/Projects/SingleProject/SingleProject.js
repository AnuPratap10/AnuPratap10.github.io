import {makeStyles} from "@material-ui/core/styles";

import "./SingleProject.css";

import React from "react";
import "../projectcard.css";
import Fade from "react-reveal/Fade";
import {FaCode, FaPlay} from "react-icons/fa";
const SingleProject = ({id, name, desc, tags, code, demo, image, theme}) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();
  return (
    <Fade left>
      <div className="card">
        <div style={{height: "87%"}}>
          <div className="card-image">
            <img src={image} alt="" />
          </div>
          <div className="card-description">
            <h2
              id={name.replace(" ", "-").toLowerCase()}
              style={{color: theme.primary}}
              className="projectname"
            >
              {name}
            </h2>
            <p>{desc}</p>
          </div>

          <div className="card-techStack">
            <p
              style={{
                textAlign: "center",
                color: theme.primary,
              }}
            >
              Tech Stacks :
            </p>
            <p>
              {tags.map((tag, id) => (
                <span key={id}>{tag} | </span>
              ))}
            </p>
          </div>
        </div>
        <div className="card-buttons">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-demo`}
            title="See Demo"
          >
            <FaPlay
              id={`${name.replace(" ", "-").toLowerCase()}-demo`}
              className={classes.icon}
              aria-label="Demo"
            />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-code`}
            title="See Codebase"
          >
            <FaCode
              id={`${name.replace(" ", "-").toLowerCase()}-code`}
              className={classes.icon}
              aria-label="Code"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default SingleProject;
