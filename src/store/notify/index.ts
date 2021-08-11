import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notifyInitialState, NotifyInitialStateType } from "./initialState";

const commonSlice = createSlice({
	name: "notify",
	initialState: notifyInitialState,
	reducers: {
		setStatusNotify(state: NotifyInitialStateType, action: PayloadAction<NotifyInitialStateType["status"]>) {
			state.status = action.payload;
		},
		setFlagNotify(state: NotifyInitialStateType, action: PayloadAction<NotifyInitialStateType["flag"]>) {
			state.flag = action.payload;
		},
	},
});

export const notifyActions = commonSlice.actions;

export default commonSlice.reducer;
