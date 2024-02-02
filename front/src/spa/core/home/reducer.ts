import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        rooms: [],
        test: {},
    },
    reducers: {
        increment: (state) => {state.test = {algo:1}},
    }
});

export const {increment} = homeSlice.actions;
export default homeSlice.reducer;