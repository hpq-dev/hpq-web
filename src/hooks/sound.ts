
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_CURSOR_SIZE: number = 20

interface soundProps {
    toggle: boolean
}

const initialState = {
    value: {  
        toggle: false
    }
} as { value: soundProps }

const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        setSoundToggle(state, action: PayloadAction<boolean>) {
            state.value.toggle = action.payload
        }
    }
})

export const {
    setSoundToggle
} = soundSlice.actions

export default soundSlice.reducer