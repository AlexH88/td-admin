import axios from "axios";

import { configUrl } from "../../configUrl";
import { ThunkType } from "../index";
import { investigatesActions } from "../investigate";
import { storyActions } from "./index";

const { baseURL } = configUrl;

export function fetchInvestigates(): ThunkType {
	//  const token = localStorage.getItem("token");
	// @ts-ignore
	const token = window.keycloak.token;
	return async (dispatch) => {
		dispatch(storyActions.fetchInvestigatesStart());
		try {
			const response = await axios.get(`${baseURL}/web/v1/investigates`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			dispatch(storyActions.fetchInvestigatesSuccess(response.data.investigates));
		} catch (e) {
			dispatch(storyActions.fetchInvestigatesError(e.message));
		}
	};
}

export function fetchSelectedInvestigate(investigateId: string): ThunkType {
	//  const token = localStorage.getItem("token");
	// @ts-ignore
	const token = window.keycloak.token;
	console.log("token", token);
	return async (dispatch) => {
		dispatch(storyActions.fetchSelectedInvestigateStart());
		try {
			const response = await axios.get(`${baseURL}/web/v1/investigates/${investigateId}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			dispatch(storyActions.fetchSelectedInvestigateSuccess(response.data));
		} catch (e) {
			dispatch(storyActions.fetchSelectedInvestigateError(e.message));
		}
	};
}
