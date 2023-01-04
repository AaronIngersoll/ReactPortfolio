import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
	const rootElement = document.querySelector(".app-wrapper");
	const root = createRoot(rootElement);
	root.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}

document.addEventListener("DOMContentLoaded", main);
