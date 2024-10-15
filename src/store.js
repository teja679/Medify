import { configureStore } from "@reduxjs/toolkit";
import medicalReducer from "./components/Slices/HosiptalSlice";
import slotBookingReducer from "./components/Slices/SlotBookingSlice";
const store = configureStore({
    reducer: {
        medical: medicalReducer,
        slotBooking: slotBookingReducer,
    }
});

export default store;