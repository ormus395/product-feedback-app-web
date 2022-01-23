import React from "react";
import "./pill.css";

const Pill = ({ type, children }: any) => {
  if (type === "upvote") {
    return (
      <span className="pill pill--upvote">
        <span>^</span>
        <span>{children}</span>
      </span>
    );
  }

  return <span className="pill">{children}</span>;
};

export default Pill;
