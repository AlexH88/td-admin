import axios from "axios";

import { configUrl } from "../../configUrl";
import { ThunkType } from "../index";
import { documentsActions } from "./index";
import { investigatesActions } from "../investigate";

const { baseURL } = configUrl;

export function fetchDocuments(): ThunkType {
	// @ts-ignore
	const token = window.keycloak.token;
	return async (dispatch) => {
		dispatch(documentsActions.fetchDocumentStart());
		try {
			const response = await axios.get(`${baseURL}/web/v1/documents`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			dispatch(documentsActions.fetchDocumentSuccess(response.data.documents));
			dispatch(investigatesActions.getOptionsDocsSelect(response.data.documents));
		} catch (e) {
			dispatch(documentsActions.fetchDocumentError(e));
		}
	};
}
