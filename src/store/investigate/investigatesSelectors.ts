import { createSelector } from "@reduxjs/toolkit";
import { NewRootState } from "../index";

const select = (state: NewRootState) => state.investigates;

export const selectDocumentId = createSelector(select, (investigates) => investigates.documentId);
export const selectDocumentsOptions = createSelector(select, (investigates) => investigates.documetsOptions ?? []);
export const selectPagesOptions = createSelector(select, (investigates) => investigates.pagesOptions ?? []);
export const selectPageNumber = createSelector(select, (investigates) => investigates.pageNumber);
export const selectImageUrl = createSelector(select, (investigates) => investigates.imageUrl);
export const selectInvestigatesLoading = createSelector(select, (investigates) => investigates.loading);
export const selectFiles = createSelector(select, (investigates) => investigates.files);
export const selectResultInvestigate = createSelector(select, (investigates) => investigates.resultInvestigate);
export const selectCurrentValueNameDoc = createSelector(select, (investigates) => investigates.currentValueNameDoc);
export const selectCurrentValuePageNumber = createSelector(
	select,
	(investigates) => investigates.currentValuePageNumber
);
export const selectInvestigatesError = createSelector(select, (investigates) => investigates.error);
