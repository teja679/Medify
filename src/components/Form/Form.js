import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack-v2-maintained';
import { fetchCities, fetchHospitalsData, setCity, setState } from '../Slices/HosiptalSlice';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useNavigate, useParams } from 'react-router';
const Form = ({ handleNavigate = () => { console.log('already in details page') }, flag = false }) => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state.medical.state);
    const city = useSelector(state => state.medical.city);

    const states = useSelector(currentState => currentState.medical.states);
    const cities = useSelector(currentState => currentState.medical.cities);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!state) {
            enqueueSnackbar('Please select a state', { variant: 'warning' })
            return;
        }
        if (!city) {
            enqueueSnackbar('Please select a city', { variant: 'warning' })
            return;
        }
        console.log({ state, city })
        dispatch(fetchHospitalsData({ state, city }))
        navigate(`/details?state=${state}&city=${city}`);
    }
    const handleStateChange = (e) => {
        dispatch(setState(e.target.value));
        dispatch(fetchCities(e.target.value))
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
                {flag ?
                    <SearchIcon sx={{ color: '#9CA3AF' }} />
                    : <LocationOnOutlinedIcon sx={{ color: '#9CA3AF' }} />
                }
                <select id="select-state" onChange={handleStateChange} >
                    <option value=''>Select State</option>
                    {states.map(item => {
                        return <option key={item} id={item}>{item}</option>
                    })}
                </select>
            </div>
            <div className={styles.inputDiv}>
                {flag ?
                    <SearchIcon sx={{ color: '#9CA3AF' }} />
                    : <LocationOnOutlinedIcon sx={{ color: '#9CA3AF' }} />
                }
                <select id="select-city" onChange={(e) => dispatch(setCity(e.target.value))} >
                    <option value=''>Select City</option>
                    {cities.map(city => {
                        return <option key={city} id={city}>{city}</option>

                    })}
                </select>
            </div>
            <div className={styles.btnDiv} onClick={handleSubmit}>
                {flag ?
                    <SearchIcon sx={{ color: '#FFFFFF' }} />
                    : <LocationOnOutlinedIcon sx={{ color: '#FFFFFF' }} />
                }
                <button type='submit'>Search</button>
            </div>
        </form>
    )
}

export default Form
