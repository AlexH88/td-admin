export interface InvestigatesCulprit {
	confidence: number;
	userId: string;
	copyTime: string;
	parameters: any[];
}

export interface InvestigatesRaw {
	confidence: number;
	userId: string;
	copyTime: string;
	parameters: any[];
}

export interface InvestigatesType {
	culprit: InvestigatesCulprit | null;
	raw: InvestigatesRaw[] | null;
}

export interface FileType {
	path: string;
}

export interface PageOption {
	value: number;
	label: number;
	color: string;
}

export interface DocumentOptionType {
	value: string;
	label: string;
	color: string;
}
