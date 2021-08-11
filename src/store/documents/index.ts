import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { documentInitialState, DocumentInitialState } from "./initialState";
import { DocumentsType } from "../../models/documents/documents";

const commonSlice = createSlice({
	name: "documents",
	initialState: documentInitialState,
	reducers: {
		fetchDocumentStart(state: DocumentInitialState, action: PayloadAction<void>) {
			state.loading = true;
		},
		fetchDocumentSuccess(state: DocumentInitialState, action: PayloadAction<DocumentsType[]>) {
			state.loading = false;
			state.documents = action.payload;
		},

		// @ts-ignore
		fetchDocumentError(state: DocumentInitialState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
	},
});

export const documentsActions = commonSlice.actions;

export default commonSlice.reducer;
