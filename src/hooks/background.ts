import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface colorProps {
    pos: number
    color: string
}

interface backgroundProps {
    backgroundColor: string
    colors: colorProps[]
}

interface initialStateProps {
    value: backgroundProps
}

const initialState = {
    value: {
        backgroundColor: '#fff'
    }
} as initialStateProps

const sliceBackground = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setBackground(state, action: PayloadAction<string>) {
            state.value.backgroundColor = action.payload
        },
        setColor(state, action: PayloadAction<colorProps>) {
            state.value.colors.push(action.payload)
        }
    }
})

export const { setBackground } = sliceBackground.actions
export default sliceBackground.reducer