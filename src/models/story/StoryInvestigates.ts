import { Status } from "../../constants/status";

export interface StoryInvestigatesInvestigatesResult {
	confidence: number;
	userId: string;
	copyTime: string;
	parameters: any[];
}
export interface StoryInvestigatesInvestigates {
	investigateId: string;
	documentId: string;
	date: string;
	login: string;
	evidenceId: string;
	status: Status;
	result: StoryInvestigatesInvestigatesResult[];
}

export interface StoryInvestigates {
	investigates: StoryInvestigatesInvestigates[];
}
