import React from "react";
import download from "../../../static/assets/images/download.png";

export default function () {
  return (
    <div className="content-page-wrapper">
    <div className="left-column"
      style={{
        background: "url(" + download + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}/>
      <div className="right-column">
        <ul >
          <li>
            School: Bottega Tech, Currently attending UVU majoring in
            Information Systems and minoring in Applied Data Analytics
          </li>
          <li>
            Work: Currently at Alder Security working as a Junior Software
            Engineer. With a few side gigs as a Web Developer.
          </li>
          <li>About: A Family Man and a happy coder.</li>
        </ul>
      </div>
    </div>
  );
}
