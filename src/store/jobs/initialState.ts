import { Jobs, JobsMetadata } from "../../models/jobs/jobs";

export interface JobsInitialStateType {
	loading: boolean;
	error: string | null;
	metadata: null | JobsMetadata;
	jobs: Jobs;
}

export const jobsInitialState: JobsInitialStateType = {
	loading: false,
	error: null,
	jobs: {
		records: [],
		metadata: null,
	},
	metadata: null,
};
