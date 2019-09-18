import React from "react";
import download from "../../../static/assets/images/download.png";

export default function() {
  return (
    <div>
      <h1>Aaron Ingersoll</h1>
      <img src={download} width="451" height="451" />
      <div>
        <div>
          School: Bottega Tech, Currently attending UVU majoring in Information
          Systems and minoring in Applied Data Analytics
        </div>
        <div>
          Work: Currently at Alder Security working as a Junior Software
          Engineer. With a few side gigs as a Web Developer.
        </div>
        <div>About: A Family Man and a happy coder.</div>
      </div>
    </div>
  );
}
