import { createSelector } from "@reduxjs/toolkit";
import { NewRootState } from "..";

const select = (state: NewRootState) => state.jobs;

export const selectRecords = createSelector(select, (jobs) => jobs.jobs.records);
export const selectMetadata = createSelector(select, (jobs) => jobs.jobs.metadata);
export const selectLoading = createSelector(select, (jobs) => jobs.loading);
