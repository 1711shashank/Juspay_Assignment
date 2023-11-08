import slice from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        slice: slice
    }
});

export default store;
