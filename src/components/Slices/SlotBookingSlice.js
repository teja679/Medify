import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookedSlotsData: JSON.parse(localStorage.getItem('bookedSlotsData')) || {},
    hospitalData: JSON.parse(localStorage.getItem('hospitalData')) || {},
};

const slotBookingSlice = createSlice({
    name: 'slotBooking',
    initialState,
    reducers: {
        bookSlot: (state, action) => {
            const { slot, date, hospitalInfo } = action.payload;
            const id = hospitalInfo['Provider ID'];  // Assuming Phone Number is unique for each hospital
            const bookedDate = new Date(date).toLocaleDateString('en-US');
            // Ensure that date exists in the bookedSlotsData
            if (!state.bookedSlotsData[bookedDate]) {
                state.bookedSlotsData[bookedDate] = {};
            }

            const currentSlots = state.bookedSlotsData[bookedDate][id] || [];
            const updatedSlots = currentSlots.includes(slot) ? currentSlots : [...currentSlots, slot];

            state.bookedSlotsData[bookedDate][id] = updatedSlots;
            if (!state.hospitalData[id]) {
                state.hospitalData[id] = { ...hospitalInfo, date };
            }
            localStorage.setItem('hospitalData', JSON.stringify(state.hospitalData))
            localStorage.setItem('bookedSlotsData', JSON.stringify(state.bookedSlotsData))
        },

        updateSlots: (state, action) => {
            const date = new Date().toLocaleDateString('en-us');
            Object.keys(state.bookedSlotsData).forEach(key => {
                if (key < date) {
                    delete state.bookedSlotsData[key];
                }
            })
            localStorage.setItem('hospitalData', JSON.stringify(state.hospitalData))
            localStorage.setItem('bookedSlotsData', JSON.stringify(state.bookedSlotsData))
        },
        cancelSlot: (state, action) => {
            const { date, hospitalInfo } = action.payload;
            const id = hospitalInfo['Phone Number'];

            // Remove the booked slot for a specific hospital on a specific date
            if (state.bookedSlotsData[date] && state.bookedSlotsData[date][id]) {
                delete state.bookedSlotsData[date][id];

                // Clean up the date key if no hospitals have booked slots for that date
                if (Object.keys(state.bookedSlotsData[date]).length === 0) {
                    delete state.bookedSlotsData[date];
                }
            }
            localStorage.setItem('hospitalData', JSON.stringify(state.hospitalData))
            localStorage.setItem('bookedSlotsData', JSON.stringify(state.bookedSlotsData))
        },
    },
});

export const { bookSlot, cancelSlot, updateSlots } = slotBookingSlice.actions;

export default slotBookingSlice.reducer;
