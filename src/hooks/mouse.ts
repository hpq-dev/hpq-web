import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const DEFAULT_CURSOR_SIZE: number= 20

interface mouseProps {
    size: number
    title: string
}

const initialState = {
    value: {
        size: DEFAULT_CURSOR_SIZE,
        title: 'Drag up'
    }
} as { value: mouseProps }

const mouseSlice = createSlice({
    name: 'mouse',
    initialState,
    reducers: {
        setMouseSize(state, action: PayloadAction<number>) {
            state.value.size = action.payload
        },
        setMouseTitle(state, action: PayloadAction<string>) {
            state.value.title = action.payload
        },
        setMouse(state, action: PayloadAction<mouseProps>) {
            state.value = action.payload
        }
    }
})

export const { 
    setMouseTitle, 
    setMouseSize,
    setMouse
} = mouseSlice.actions

export default mouseSlice.reducer