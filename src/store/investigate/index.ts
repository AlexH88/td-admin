import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { investigateInitialState, InvestigateStateType } from "./initialState";
import { DocumentInitialState } from "../documents/initialState";
import { DocumentsType } from "../../models/documents/documents";

const commonSlice = createSlice({
	name: "investigates",
	initialState: investigateInitialState,
	reducers: {
		getOptionsDocsSelect(state: InvestigateStateType, action: PayloadAction<DocumentsType[]>) {
			state.documetsOptions = action.payload.map((element) => {
				return {
					value: element.documentId,
					label: element.fileName,
					color: "#5243AA",
				};
			});
		},
		setIdDoc(state: InvestigateStateType, action: PayloadAction<InvestigateStateType["documentId"]>) {
			state.documentId = action.payload;
		},
		getOptionsPageSelect(state: InvestigateStateType, action: PayloadAction<number>) {
			let options = [];
			if (action.payload) {
				for (let i = 1; i < action.payload + 1; i++) {
					options.push({
						value: i,
						label: i,
						color: "#5243AA",
					});
				}
			}
			state.pagesOptions = options;
		},
		setValueNameDoc(state: InvestigateStateType, { payload }: PayloadAction<DocumentsType>) {
			state.currentValueNameDoc = {
				value: payload.documentId,
				label: payload.fileName,
				color: "#5243AA",
			};
		},
		setValuePageNumber(state: InvestigateStateType, action: PayloadAction<number>) {
			state.currentValuePageNumber = {
				value: action.payload,
				label: action.payload,
				color: "#5243AA",
			};
		},
		setPageNumber(state: InvestigateStateType, action: PayloadAction<InvestigateStateType["pageNumber"]>) {
			state.pageNumber = action.payload;
		},
		setDropFile(
			state: InvestigateStateType,
			action: PayloadAction<{
				imageUrl: InvestigateStateType["imageUrl"];
				files: InvestigateStateType["files"];
			}>
		) {
			state.imageUrl = action.payload.imageUrl;
			state.files = action.payload.files;
		},
		fetchInvestigateStart(state: InvestigateStateType, action: PayloadAction) {
			state.loading = true;
		},
		fetchInvestigateSuccess(
			state: InvestigateStateType,
			action: PayloadAction<InvestigateStateType["resultInvestigate"]>
		) {
			state.loading = false;
			state.resultInvestigate = action.payload;
		},
		// @ts-ignore
		fetchInvestigateError(state: DocumentInitialState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
	},
});

export const investigatesActions = commonSlice.actions;

export default commonSlice.reducer;
