import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jobsInitialState, JobsInitialStateType } from "./initialState";
import { Jobs } from "../../models/jobs/jobs";

const commonSlice = createSlice({
	name: "jobs",
	initialState: jobsInitialState,
	reducers: {
		fetchJobsStart(state: JobsInitialStateType, action: PayloadAction) {
			state.loading = true;
		},
		fetchJobsSuccess(state: JobsInitialStateType, action: PayloadAction<Jobs>) {
			state.loading = false;
			state.jobs = action.payload;
			state.metadata = action.payload.metadata;
		},

		// @ts-ignore
		fetchJobsError(state: JobsInitialStateType, action: PayloadAction<string>) {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const jobsActions = commonSlice.actions;

export default commonSlice.reducer;
