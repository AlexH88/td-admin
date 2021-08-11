import { NewRootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

const select = (state: NewRootState) => state.story;
export const selectInvestigates = createSelector(select, (story) => story.investigates);

export const selectSelectedInvestigate = createSelector(select, (story) => story.selectedInvestigate);
