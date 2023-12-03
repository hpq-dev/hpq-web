import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useProcentage } from '@/util';

type props = {
    x: number
    y: number
    maxX: number
    maxY: number
}
const initialState: { value: props } = {
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

export const getScrollProgress = () => {
    const [progress, setProgress] = useState<number>(0)
    const { y, maxY } = useSelector((state: RootState) => state.scroll.value)
    useEffect(() => setProgress(useProcentage(y, maxY - window.innerHeight)), [y, maxY])
    return progress
}

export const { setValue } = scrollSlice.actions;
export default scrollSlice.reducer;