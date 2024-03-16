import React from "react";
import "./JobRight.css";

export default function JobRight({ name, emoji, title, location, desc, img }) {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 col-1">
          <img
            className="jobImg"
            alt="Right Product"
            src={img}
            style={{ width: "75%", height: "75%" }}
          />
        </div>
        <div className="row-span-3 col-span-2 jobStuffRight">
          <div className="jobName">
            {name} <span className="chessIcon"> {emoji}</span>
          </div>
          <div className="jobTitle">{title}</div>
          <div className="jobLocation">{location}</div>
          <div className="jobDescription">{desc}</div>
        </div>
      </div>
    </>
  );
}
