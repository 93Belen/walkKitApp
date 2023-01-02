import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'location',
    initialState: '',
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const locationSlice = createSlice(options);
export const { changeState } = locationSlice.actions;
export default locationSlice.reducer;