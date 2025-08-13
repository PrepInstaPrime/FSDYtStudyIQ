import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
})
export const { increment,decrement } = counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state) => state.counter.count;