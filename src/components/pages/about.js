import React from "react";
import download from "../../../static/assets/images/download.png";
import { Link } from "react-router-dom";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + download + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				<ul>
					<li>
						School: Bacheclors from UVU majoring in Information Systems and
						minoring in Applied Data Analytics <br /> Core GPA: 3.8
					</li>
					<li>
						Work Resume:{" "}
						<a
							href="https://docs.google.com/document/d/1gKEfdRbymmveKWMpLgy7Tj09POprnRRI/edit?usp=sharing&ouid=109367959874837075766&rtpof=true&sd=true"
							target="_blank">
							Resume
						</a>
					</li>
					<li>About: A Family Man and a happy coder.</li>
				</ul>
			</div>
		</div>
	);
}
