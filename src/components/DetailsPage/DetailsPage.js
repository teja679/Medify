import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateCities, updateHopitalsData } from '../../Slice';
import { useSnackbar } from 'notistack-v2-maintained';
import { Warning } from '@mui/icons-material';

const DetailsPage = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const [cardSelected, setCardSelected] = useState('')
    const [state, setState] = useState(useSelector(state => state.state) || '')
    const [city, setCity] = useState(useSelector(state => state.city) || '')
    const states = useSelector(state => state.states) || []
    const cities = useSelector(state => state.cities) || []
    const hospitalsData = useSelector(state => state.hospitalsData) || []

    useEffect(() => {
        dispatch(updateCities(state))
    }, [state, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (city && state)
            dispatch(updateHopitalsData({ state, city }))
        else
            enqueueSnackbar('Slecet valid state and city', { variant: Warning })
    }
    return (
        <div className={styles.detailsPage}>
            <div className={styles.box}></div>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <div className={styles.inputDiv}>
                    <SearchIcon sx={{ color: '#9CA3AF' }} />
                    <select onChange={(e) => setState(e.target.value)} >
                        <option value=''>Select State</option>
                        {states.map(item => {
                            return <option key={item} id={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className={styles.inputDiv}>
                    <SearchIcon sx={{ color: '#9CA3AF' }} />
                    <select id="select-city" onChange={(e) => setCity(e.target.value)} >
                        <option value=''>Select City</option>
                        {cities.map(city => {
                            return <option key={city} id={city}>{city}</option>

                        })}
                    </select>
                </div>
                <div className={styles.btnDiv} onClick={()=>console.log('hello')}>
                    <SearchIcon sx={{ color: '#FFFFFF' }} />
                    <button type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default DetailsPage
