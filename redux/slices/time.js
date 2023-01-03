import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'time',
    initialState: {},
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const timeSlice = createSlice(options);
export const { changeState } = timeSlice.actions;
export default timeSlice.reducer;