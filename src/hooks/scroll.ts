import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type props = {
    x: number
    y: number
    maxX: number
    maxY: number
}

type scrollProps = {
    value: props
};

const initialState: scrollProps = {
    value: {
        x: 0,
        y: 0,
        maxX: 0,
        maxY: 0
    }
};

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<props>) {
            state.value = action.payload
        }
    }
});

export const { setValue } = scrollSlice.actions;
export default scrollSlice.reducer;