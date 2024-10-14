import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slice";
const store = configureStore({
    reducer: reducer
});

export default store;