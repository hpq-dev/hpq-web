import { configureStore } from "@reduxjs/toolkit";
import astronaut from "./astronaut";
import background from "./background";
import mouse from "./mouse";
import scroll from './scroll';
import sound from "./sound";

const store = configureStore({
    reducer: {
        scroll,
        background,
        mouse,
        astronaut,
        sound
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export default store