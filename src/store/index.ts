import { configureStore } from "@reduxjs/toolkit";
import reduxThunk, { ThunkAction } from "redux-thunk";
import documents from "./documents";
import investigates from "./investigate";
import jobs from "./jobs";
import notify from "./notify";
import story from "./story";
import { AnyAction } from "redux";

export const store = configureStore({
	reducer: { documents, investigates, jobs, notify, story },
	middleware: [reduxThunk],
});

export type NewRootState = ReturnType<typeof store.getState>;
export type ThunkType = ThunkAction<Promise<void>, NewRootState, {}, AnyAction>;
