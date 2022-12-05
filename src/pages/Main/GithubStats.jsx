import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
function Github() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "400",
        }}
      >
        Github Calendar
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Row>
          <h1 style={{ paddingBottom: "20px" }}>
            Days I <strong>Code</strong>
          </h1>
          <GitHubCalendar
            style={{ width: "100%" }}
            username="AnuPratap10"
            blockSize={15}
            blockMargin={5}
            color="#7fff00"
            fontSize={11}
            hideColorLegend={true}
            tooltips={true}
          />
        </Row>
      </div>
    </div>
  );
}
export default Github;
