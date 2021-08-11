export interface JobsMetadataLinks {
	self: string;
	first: string;
	previous?: any;
	next: string;
	last: string;
}
export interface JobsMetadata {
	page: number;
	perPage: number;
	pageCount: number;
	totalCount: number;
	links: JobsMetadataLinks;
}
export interface JobsRecordsEventData {
	internalDocumentId: string;
	initiator: string;
	fileName: string;
	pageNumber: number;
	investigateId: string;
}
export interface JobsRecords {
	id: string;
	date: string;
	taskId: string;
	processName: string;
	processType: string;
	eventName: string;
	eventType: string;
	eventData: JobsRecordsEventData;
}

export interface Jobs {
	metadata: JobsMetadata | null;
	records: JobsRecords[];
}
