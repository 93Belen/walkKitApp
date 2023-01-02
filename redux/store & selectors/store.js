import { configureStore } from "@reduxjs/toolkit";
import viewModalSlice from '../slices/viewModal';
import locationSlice from '../slices/location'


const store = configureStore({
    reducer: {
        viewModal: viewModalSlice,
        location: locationSlice
    }
})

export default store;