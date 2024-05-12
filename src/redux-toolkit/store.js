import { combineReducers, configureStore} from "@reduxjs/toolkit";
import memorySlice from "./slices/memorySlice";



export const store = configureStore({
    reducer: {memorySlice}
})