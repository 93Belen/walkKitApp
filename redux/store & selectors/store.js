import { configureStore } from "@reduxjs/toolkit";
import viewModalSlice from '../slices/viewModal';
import forecastSlice from '../slices/forecast';
import timeSlice from '../slices/time';
import locationSlice from '../slices/location';

const store = configureStore({
    reducer: {
        viewModal: viewModalSlice,
        forecast: forecastSlice,
        time: timeSlice,
        location: locationSlice
    }
})

export default store;