import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'viewModal',
    initialState: false,
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const viewModalSlice = createSlice(options);
export const { changeState } = viewModalSlice.actions;
export default viewModalSlice.reducer;