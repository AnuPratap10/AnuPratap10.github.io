import React from "react";
import Github from "./GithubStats";
import "./githubstatic.css";
const GithubStatic = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#6e76c7",
        height: "auto",
        paddingTop: "80px",
      }}
      name="Github Stats"
    >
      <h2
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        Github Stats
      </h2>
      <div className="git_main_div">
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=AnuPratap10&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=5&locale=en&theme=dark"
          alt="Anu"
          style={{ height: "190px" }}
          className="img1"
        />
        <img
        id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=AnuPratap10&layout=compact&hide=Shell&border_radius=5&theme=dark"
          alt=""
          style={{ height: "190px" }}
          className="img1"
        />
      </div>

      <img
      id="github-streak-stats"
        align="center"
        src="https://github-readme-streak-stats.herokuapp.com/?user=AnuPratap10&theme=dark"
        alt="anu"
        // height="50px"
        style={{ marginBottom: "20px" }}
        className="imgb"
      />
      <Github />
    </div>
  );
};

export default GithubStatic;
