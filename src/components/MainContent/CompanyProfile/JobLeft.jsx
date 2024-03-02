import React from "react";
import "./JobLeft.css";

export default function JobLeft({ name, emoji, title, location, desc, img }) {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 col-span-2 jobStuffLeft">
          <div className="jobName">
            {name}
            <span className="chessIcon"> {emoji}</span>
          </div>
          <div className="jobTitle">{title}</div>
          <div className="jobLocation">{location}</div>
          <div className="jobDescription">{desc}</div>
        </div>
        <div className="row-span-3 col-span-1">
          <img
            className="jobImg"
            alt="chess hall of fame"
            src={img}
            style={{ width: "25vw" }}
          />
        </div>
      </div>

    </>
  );
}
