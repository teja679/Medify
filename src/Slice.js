import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const medicalSlice = createSlice({
    name: 'medical',
    initialState: {
        state: '',
        city: '',
        states: [],
        cities: [],
        hospitalsData: []
    },
    reducers: {
        updateStates: (state, action) => {
            state.states = action.payload;
        },
        updateCities: async (state, action) => {
            const selectedState = action.payload;

            if (selectedState && state.city) {
                try {
                    const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
                    state.cities = response.payload;
                } catch (err) {
                    console.error("Fetching cities data failed")
                }
            }
        },
        updateHopitalsData: async (state, action) => {
            const { selectedState, selectedCity } = action.payload;
            if (selectedState && state.state !== selectedState && selectedCity && state.city !== selectedCity) {
                try {
                    const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
                    state.hospitalsData = response.data;
                } catch (err) {
                    console.error("Fetching Hospitals data failed")
                }
            }
        },
    }
})

export const { updateCities, updateStates, updateHopitalsData } = medicalSlice.actions;
export default medicalSlice.reducer;