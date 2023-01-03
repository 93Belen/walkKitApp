import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: 'forecast',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const forecastSlice = createSlice(options);
export const { changeState } = forecastSlice.actions;
export default forecastSlice.reducer;