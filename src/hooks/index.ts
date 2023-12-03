import { configureStore } from "@reduxjs/toolkit";
import scroll from './scroll'
import background from "./background";

const store = configureStore({
    reducer: {
        scroll,
        background
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store