import React, { Component } from "react";
import { Routes, Switch, Route } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Icons from "./icons";

export default class App extends Component {
	constructor(props) {
		super(props);

		Icons();

		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
		};

		this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
		this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
		this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
	}

	handleSuccessfulLogin() {
		this.setState({
			loggedInStatus: "LOGGED_IN",
		});
	}

	handleUnsuccessfulLogin() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
		});
	}

	handleSuccessfulLogout() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
		});
	}

	checkLoginStatus() {
		return axios
			.get("https://api.devcamp.space/logged_in", {
				withCredentials: true,
			})
			.then((response) => {
				const loggedIn = response.data.logged_in;
				const loggedInStatus = this.state.loggedInStatus;

				if (loggedIn && loggedInStatus === "LOGGED_IN") {
					return loggedIn;
				} else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
					this.setState({
						loggedInStatus: "LOGGED_IN",
					});
				} else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
					this.setState({
						loggedInStatus: "NOT_LOGGED_IN",
					});
				}
			})
			.catch((error) => {
				console.log("Error", error);
			});
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	authorizedPages() {
		return [
			<Route
				key="portfolio-manager"
				path="/portfolio-manager"
				element={<PortfolioManager />}
			/>,
		];
	}

	render() {
		return (
			// <AuthProvider>
			<div className="container">
				<NavigationContainer
					loggedInStatus={this.state.loggedInStatus}
					handleSuccessfulLogout={this.handleSuccessfulLogout}
				/>
				<Routes>
					{/* <Switch> */}
					<Route exact path="/" element={<Home />} />

					<Route
						path="/auth"
						element={
							<Auth
								handleSuccessfulLogin={this.handleSuccessfulLogin}
								handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
							/>
						}
					/>

					<Route path="/about-me" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
					{this.state.loggedInStatus === "LOGGED_IN"
						? this.authorizedPages()
						: null}
					<Route exact path="/portfolio/:slug" element={<PortfolioDetail />} />
					<Route element={<NoMatch />} />
					{/* </Switch> */}
				</Routes>
			</div>
			// </AuthProvider>
		);
	}
}

{
	/* <Routes>
	<Route element={<Layout />}>
		<Route path="/" element={<PublicPage />} />
		<Route path="/login" element={<LoginPage />} />
		<Route
			path="/protected"
			element={
				<RequireAuth>
					<ProtectedPage />
				</RequireAuth>
			}
		/>
	</Route>
</Routes>; */
}
