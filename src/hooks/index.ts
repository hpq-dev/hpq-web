import { configureStore } from "@reduxjs/toolkit";
import scroll from './scroll'
import background from "./background";
import mouse from "./mouse";

const store = configureStore({
    reducer: {
        scroll,
        background,
        mouse
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store