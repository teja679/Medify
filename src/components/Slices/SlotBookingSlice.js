import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookedSlotsData: {},
};

const slotBookingSlice = createSlice({
    name: 'slotBooking',
    initialState,
    reducers: {
        bookSlot: (state, action) => {
            const { slot, date, hospitalInfo } = action.payload;
            console.log('date', date)
            const id = hospitalInfo['Provider ID'];  // Assuming Phone Number is unique for each hospital

            // Ensure that date exists in the bookedSlotsData
            if (!state.bookedSlotsData[date]) {
                state.bookedSlotsData[date] = {};
            }

            // Get the current booked slots for the hospital on the selected date
            const currentSlots = state.bookedSlotsData[date][id]?.slots || [];

            // If the slot is already booked, don't add it again
            const updatedSlots = currentSlots.includes(slot) ? currentSlots : [...currentSlots, slot];

            // Ensure that the hospital ID exists under the selected date and store the updated slot array
            state.bookedSlotsData[date][id] = {
                ...state.bookedSlotsData[date][id],  // Preserve existing hospital info and slots
                hospitalInfo,  // Overwrite or update the hospital information if needed
                slots: updatedSlots,  // Save the updated slots array
            };
        },

        updateSlots: (state, action) => {
            const { date } = action.payload;
            Object.keys(state.bookedSlotsData).forEach(key => {
                if (key >= date) {
                    delete state.bookedSlotsData[key];
                }
            })
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
        },
    },
});

export const { bookSlot, cancelSlot } = slotBookingSlice.actions;

export default slotBookingSlice.reducer;
