import { DocumentOptionType, InvestigatesType, PageOption } from "../../models/investigates/Investigates";
import { NamedProps } from "react-select/src/Select";

export interface InvestigateStateType {
	documetsOptions: NamedProps["options"];
	//TODO: Gorshteyn add type
	pagesOptions: any[];
	files: any[];
	documentId: string;
	imageUrl: string | null;
	error: string | null;
	pageNumber: string | null;

	resultInvestigate: InvestigatesType | null;
	loading: boolean;
	currentValueNameDoc: DocumentOptionType | null;
	//TODO: Gorshteyn add type
	currentValuePageNumber: PageOption | null;
}

export const investigateInitialState: InvestigateStateType = {
	documetsOptions: [],
	pagesOptions: [],
	documentId: "",
	pageNumber: null,
	imageUrl: null,
	files: [],
	resultInvestigate: null,
	loading: false,
	currentValueNameDoc: null,
	currentValuePageNumber: null,
	error: null,
};
