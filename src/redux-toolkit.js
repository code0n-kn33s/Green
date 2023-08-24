import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./toolkitReducers";

export const store = configureStore({
    reducer: rootReducer
})