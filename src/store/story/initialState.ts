import { InvestigatesType } from "../../models/investigates/Investigates";
import { StoryInvestigatesInvestigates } from "../../models/story/StoryInvestigates";

export interface StoryInitialStateType {
	loading: boolean;
	error: string | null;
	investigates: StoryInvestigatesInvestigates[];
	selectedInvestigate: InvestigatesType | null;
}

export const storyInitialState: StoryInitialStateType = {
	loading: false,
	error: null,
	investigates: [],
	selectedInvestigate: null,
};
