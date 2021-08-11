import Keycloak from "keycloak-js";

// declare global {
// 	interface Window {
// 		keycloak: Keycloak.KeycloakInstance;
// 	}
// }

export interface CustomWindow extends Window {
	keycloak: Keycloak["KeycloakInstance"];
}

declare var window: CustomWindow;
// export {}

// interface MyWindow extends Window {
// 	keycloak: Keycloak.KeycloakInstance;
// }
//
// declare const window: MyWindow;
//
