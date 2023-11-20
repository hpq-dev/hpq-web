import { configureStore } from "@reduxjs/toolkit";
import scroll from './scroll'

const store = configureStore({
    reducer: {
        scroll
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store