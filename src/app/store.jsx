import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covidSlice"

const store = configureStore({
    reducer:{
        covid: covidReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;