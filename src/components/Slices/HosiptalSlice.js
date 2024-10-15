import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks to handle async operations
export const fetchStates = createAsyncThunk('medical/fetchStates', async () => {
  const response = await axios.get('https://meddata-backend.onrender.com/states');
  return response.data;
});

export const fetchCities = createAsyncThunk('medical/fetchCities', async (selectedState) => {
  const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
  return response.data;
});

export const fetchHospitalsData = createAsyncThunk(
  'medical/fetchHospitalsData',
  async ({ state, city }) => {
    const response = await axios.get(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    );
    // console.log(response.data)
    return response.data;
  }
);

const medicalSlice = createSlice({
  name: 'medical',
  initialState: {
    state: '',
    city: '',
    states: [],
    cities: [],
    hospitalsData: [],
    error: null,
  },
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch States
    builder
      .addCase(fetchStates.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // Fetch Cities
    builder
      .addCase(fetchCities.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.error = action.error.message;
      });

    // Fetch Hospitals Data
    builder
      .addCase(fetchHospitalsData.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchHospitalsData.fulfilled, (state, action) => {
        state.hospitalsData = action.payload;
      })
      .addCase(fetchHospitalsData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setState, setCity } = medicalSlice.actions;
export default medicalSlice.reducer;
