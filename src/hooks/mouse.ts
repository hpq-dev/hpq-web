import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_CURSOR_SIZE: number= 20

export type mouseType = 'normal' | 'leftright'

interface mouseProps {
    size: number
    title: string
    type: mouseType
}

const initialState = {
    value: {
        size: DEFAULT_CURSOR_SIZE,
        title: 'Press click',
        type: 'normal'
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
        },
        setMouseType(state, action: PayloadAction<mouseType>) {
            state.value.type = action.payload
        }
    }
})

export const { 
    setMouseTitle, 
    setMouseSize,
    setMouse,
    setMouseType
} = mouseSlice.actions

export default mouseSlice.reducer