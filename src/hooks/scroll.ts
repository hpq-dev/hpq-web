import { useProcentage } from '@/util';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '.';

type props = {
    x: number
    y: number
    maxX: number
    maxY: number
}

interface defaultProps extends props {
    setX: number
    setY: number
}

const initialState: { value: defaultProps } = {
    value: {
        x: 0,
        y: 0,
        maxX: 0,
        maxY: 0,
        setX: 0,
        setY: 0
    }
};

const scrollSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<props>) {
            state.value = {
                ...state.value,
                ...action.payload
            }
        },
        setScroll(state, action: PayloadAction<[number, number]>) {
            const [x, y] = action.payload
            state.value.setX = x
            state.value.setY = y
        },
    }
});

export const getScrollProgress = () => {
    const [progress, setProgress] = useState<number>(0)
    const { y, maxY } = useSelector((state: RootState) => state.scroll.value)
    useEffect(() => setProgress(useProcentage(y, maxY - window.innerHeight)), [y, maxY])
    return progress
}

export const { setValue, setScroll } = scrollSlice.actions;
export default scrollSlice.reducer;