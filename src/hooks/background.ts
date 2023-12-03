import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface colorProps {
    pos: number
    color: string
}
interface backgroundProps {
    colors: colorProps[]
}

const initialState = {
    value: {
        colors: []
    }
} as { value: backgroundProps }

const sliceBackground = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setColor(state, action: PayloadAction<colorProps>) {
            state.value.colors.push(action.payload)
        },
        removeColor(state, action: PayloadAction<number>) {
            state.value.colors = state.value.colors.filter(
                ({ pos }) => pos !== action.payload
            )
        }
    }
})

export const { setColor, removeColor } = sliceBackground.actions
export default sliceBackground.reducer