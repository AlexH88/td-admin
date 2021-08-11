import axios from "axios";

import { configUrl } from "../../configUrl";
import { ThunkType } from "../index";
import { jobsActions } from "./index";

const { baseURL } = configUrl;

export function fetchJobs(query: string = `/web/v1/events`): ThunkType {
	// @ts-ignore
	const token = window.keycloak.token;
	return async (dispatch) => {
		dispatch(jobsActions.fetchJobsStart());
		try {
			const response = await axios.get(`${baseURL}${query}`, {
				headers: { Authorization: `Bearer ${token}` },
				params: { perPage: 12 },
			});
			dispatch(jobsActions.fetchJobsSuccess(response.data));
		} catch (e) {
			dispatch(jobsActions.fetchJobsError(e));
		}
	};
}
