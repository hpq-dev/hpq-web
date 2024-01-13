import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_CURSOR_SIZE: number = 20

export type mouseType = 'normal' | 'leftright'

interface mouseProps {
    size: number
    title: string
    type: mouseType
}

interface extendMouseProps extends mouseProps {
    root: string
}

const initialState = {
    value: {
        size: DEFAULT_CURSOR_SIZE,
        title: 'Press click',
        type: 'normal',
        root: ''
    }
} as { value: extendMouseProps }

const mouseSlice = createSlice({
    name: 'mouse',
    initialState,
    reducers: {
        setMouseRoot(state, action: PayloadAction<string>) {
            state.value.root = action.payload
        },
        setMouseSize(state, action: PayloadAction<number>) {
            state.value.size = action.payload
        },
        setMouseTitle(state, action: PayloadAction<string>) {
            state.value.title = action.payload
        },
        setMouse(state, action: PayloadAction<mouseProps>) {
            state.value.size = action.payload.size
            state.value.title = action.payload.title
            state.value.type = action.payload.type
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
    setMouseType,
    setMouseRoot
} = mouseSlice.actions

export default mouseSlice.reducer