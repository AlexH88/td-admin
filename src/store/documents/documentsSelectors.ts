import { NewRootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

const select = (state: NewRootState) => state.documents;

export const selectAllDocuments = createSelector(select, (documents) => documents.documents);
