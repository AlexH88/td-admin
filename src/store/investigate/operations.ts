import axios from "axios";

import { configUrl } from "../../configUrl";
import { ThunkType } from "../index";
import { investigatesActions } from "./index";
import { notifyActions } from "../notify";

const { baseURL } = configUrl;

async function getResponseIvestigate(investigateId: any, interval: any, dispatch: any) {
	//  const token = localStorage.getItem("token");
	// @ts-ignore
	const token = window.keycloak.token;
	try {
		const response = await axios.get(`${baseURL}/web/v1/investigates/${investigateId}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		if (response.status == 200 || response.status == 201) {
			dispatch(investigatesActions.fetchInvestigateSuccess(response.data));
			dispatch(notifyActions.setStatusNotify(true));
			clearInterval(interval);
		}
	} catch (e) {
		//    console.log(e);
	}
}

export function fetchInvestigate(body: FormData): ThunkType {
	//  const token = localStorage.getItem("token");
	// @ts-ignore
	const token = window.keycloak.token;
	return async (dispatch) => {
		dispatch(investigatesActions.fetchInvestigateStart({}));

		try {
			const response = await axios.post(`${baseURL}/web/v1/investigates`, body, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data",
				},
			});

			if ((response.status == 200 || response.status == 201) && response.data.investigateId) {
				const investigateId = response.data.investigateId;
				//        let atTimes = 0;
				const interval = setInterval(() => {
					//          if (atTimes > 225) {
					//            dispatch(fetchInvestigateError("Нет результата"));
					//            dispatch(setStatusNotify(true));
					//            clearInterval(interval);
					//          }
					getResponseIvestigate(investigateId, interval, dispatch);

					//          atTimes = atTimes + 1;
				}, 5000);
			} else {
				dispatch(investigatesActions.fetchInvestigateError("error"));
				dispatch(notifyActions.setStatusNotify(true));
			}
		} catch (e) {
			dispatch(investigatesActions.fetchInvestigateError(e));
		}
	};
}
