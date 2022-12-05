import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import "./projectcard.css";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {projectsData.length > 0 && (
        <section
          className="container"
          name="project"
          style={{
            backgroundColor: theme.secondary,
          }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
            }}
          >
            {projectsData.slice(0, 3).map((projectss) => (
              <SingleProject
                theme={theme}
                key={projectss.id}
                id={projectss.id}
                name={projectss.projectName}
                desc={projectss.projectDesc}
                tags={projectss.tags}
                code={projectss.code}
                demo={projectss.demo}
                image={projectss.image}
              />
            ))}
          </div>
          <div className="projects--viewAll">
            <Link to="/projects">
              <button className={classes.viewAllBtn}>
                View All
                <HiArrowRight className={classes.viewArr} />
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

export default Projects;
