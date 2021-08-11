import { DocumentsType } from "../../models/documents/documents";

export interface DocumentInitialState {
	documents: DocumentsType[];
	loading: boolean;
	error: string | null;
}

export const documentInitialState: DocumentInitialState = {
	loading: false,
	error: null,
	documents: [],
};
