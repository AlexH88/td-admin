import { NewRootState } from "../index";
import { createSelector } from "@reduxjs/toolkit";

const select = (state: NewRootState) => state.notify;
export const selectNotifyStatus = createSelector(select, (notify) => notify.status);
export const selectNotifyFlag = createSelector(select, (notify) => notify.flag);
