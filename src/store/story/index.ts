import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storyInitialState, StoryInitialStateType } from "./initialState";

const commonSlice = createSlice({
	name: "story",
	initialState: storyInitialState,
	reducers: {
		fetchInvestigatesStart(state: StoryInitialStateType) {
			state.loading = true;
		},
		fetchInvestigatesSuccess(
			state: StoryInitialStateType,
			action: PayloadAction<StoryInitialStateType["investigates"]>
		) {
			state.investigates = action.payload;
			state.loading = false;
		},
		// @ts-ignore
		fetchInvestigatesError(state: StoryInitialStateType, action: PayloadAction<string>) {
			state.error = action.payload;
			state.loading = false;
		}, // @ts-ignore
		fetchSelectedInvestigateError(state: StoryInitialStateType, action: PayloadAction<string>) {
			state.error = action.payload;
			state.loading = false;
		},
		fetchSelectedInvestigateStart(state: StoryInitialStateType) {
			state.loading = true;
		},
		fetchSelectedInvestigateSuccess(
			state: StoryInitialStateType,
			action: PayloadAction<StoryInitialStateType["selectedInvestigate"]>
		) {
			state.loading = false;
			state.selectedInvestigate = action.payload;
		},
	},
});

export const storyActions = commonSlice.actions;

export default commonSlice.reducer;
