import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = (props) => {
	const dynamicLink = (route, linkText) => {
		return (
			<div className="nav-link-wrapper">
				<NavLink to={route} activeclassname="nav-link-active">
					{linkText}
				</NavLink>
			</div>
		);
	};

	const handleSignOut = () => {
		axios
			.delete("https://api.devcamp.space/logout", { withCredentials: true })
			.then((response) => {
				if (response.status === 200) {
					props.history.push("/");
					props.handleSuccessfulLogout();
				}
				return response.data;
			})
			.catch((error) => {
				console.log("Error signing out", error);
			});
	};

	return (
		<div className="nav-wrapper">
			<div className="left-side">
				<div className="nav-link-wrapper">
					<NavLink exact to="/" activeclassname="nav-link-active">
						Home
					</NavLink>
				</div>

				<div className="nav-link-wrapper">
					<NavLink to="/about-me" activeclassname="nav-link-active">
						About
					</NavLink>
				</div>

				<div className="nav-link-wrapper">
					<NavLink to="/contact" activeclassname="nav-link-active">
						Contact
					</NavLink>
				</div>

				<div className="nav-link-wrapper">
					<NavLink activeclassname="nav-link-active">Blog</NavLink>
				</div>

				{props.loggedInStatus === "LOGGED_IN"
					? dynamicLink("/portfolio-manager", "Portfolio Manager")
					: null}
			</div>

			<div className="right-side">
				<NavLink to="/auth" activeclassname="nav-link-active">
					AARON INGERSOLL
				</NavLink>
				{props.loggedInStatus === "LOGGED_IN" ? (
					<a onClick={handleSignOut}>
						<FontAwesomeIcon icon="sign-out-alt" />
					</a>
				) : null}
			</div>
		</div>
	);
};
export default NavigationComponent;
