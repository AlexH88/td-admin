import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "typeface-rubik";
import { store } from "./store";
import { Provider } from "react-redux";

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
