import React, { useEffect, useState } from "react";
import { Layout } from "./hoc/Layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import { Story } from "./containers/Story/Story";
import { Journal } from "./containers/Journal/Journal";
import { Investigation } from "./containers/Investigation/Investigation";
import Keycloak from "keycloak-js";

const configKeycloak = {
	//  url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
	//  realm: "master",
	//  clientId: "test",
	url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
	realm: "SecretTechnologies",
	clientId: "tracedoc-web",
};

export const App: React.FC = () => {
	const [keycloak, setKeycloak] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		(async () => {
			const keycloakInstance = Keycloak("/keycloak.json");
			// @ts-ignore
			window.keycloak = keycloakInstance;
			keycloakInstance.init({ onLoad: "login-required" }).success((authenticated) => {
				// @ts-ignore
				setKeycloak(keycloakInstance);
				setAuthenticated(authenticated);
			});
			keycloakInstance.onTokenExpired = () => {
				console.log("token expired", keycloakInstance.token);
				keycloakInstance.updateToken(5).success(() => {
					// @ts-ignore
					window.keycloak = keycloakInstance;
				});
			};
		})();
	}, []);

	if (keycloak) {
		if (authenticated) {
			let routes = (
				<Switch>
					<Route exact path="/investigation" component={Investigation} />
					<Route exact path="/story" component={Story} />
					<Route exact path="/journal" component={Journal} />
					<Route exact path="/">
						<Redirect to="/investigation" />
					</Route>
					<Redirect from="*" to="/investigation" />
				</Switch>
			);

			return <Layout>{routes}</Layout>;
		}
	} else {
		<div>Initializing Keycloak...</div>;
	}
	return <div>Initializing Keycloak...</div>;
};
