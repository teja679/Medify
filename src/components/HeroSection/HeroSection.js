import React, { useEffect, useState } from 'react'
import heroImage from '../../assets/HeroSection/hero_image.png'
import Ambulance from '../../assets/HeroSection/Ambulance.png'
import Drugstore from '../../assets/HeroSection/Drugstore.png'
import Hospital from '../../assets/HeroSection/Hospital.png'
import Capsule from '../../assets/HeroSection/Capsule.png'
import Doctor from '../../assets/HeroSection/Doctor.png'
import img1 from '../../assets/ad1.png'
import img2 from '../../assets/ad2.png'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updateCities, updateHopitalsData } from '../../Slice'

const HeroSection = () => {
    const navigate = useNavigate();
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
        
        dispatch(updateHopitalsData({ state, city }))
        navigate('/details')
    }
    const list = [
        { title: 'Doctors', icon: Doctor },
        { title: 'Labs', icon: Drugstore },
        { title: 'Hospitals', icon: Hospital },
        { title: 'Medical Store', icon: Capsule },
        { title: 'Ambulance', icon: Ambulance },
    ]
    return (
        <div className='main-section'>
            <div className='hero-section'>
                <div className='tag-hero'>
                    <h5>Skip the travel! Find Online</h5>
                    <span className='medical'>Medical</span>{' '}<span className='centers'>Centers</span>
                    <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                    </p>
                    <a href='/details'>
                        <button>Find Centers</button>
                    </a>
                </div>
                <div className='hero-image-div'>
                    <img className='hero-image' src={heroImage} alt='Hero Img' />
                </div>
                {/* <div className='hero-form-div'> */}
                <form className='hero-form-div' onSubmit={handleSubmit}>
                    <div className='top-div'>
                        <div className='input-div'>
                            <SearchIcon sx={{ color: '#9CA3AF' }} />
                            <select onChange={(e) => setState(e.target.value)} >
                                <option value=''>Select State</option>
                                {states.map(item => {
                                    return <option key={item} id={item}>{item}</option>
                                })}
                            </select>
                        </div>
                        <div className='input-div'>
                            <SearchIcon sx={{ color: '#9CA3AF' }} />
                            <select id="select-city" onChange={(e) => setCity(e.target.value)} >
                                <option value=''>Select City</option>
                                {cities.map(city => {
                                    return <option key={city} id={city}>{city}</option>

                                })}
                            </select>
                        </div>
                        <div className='button-div'>
                            <SearchIcon sx={{ color: '#FFFFFF' }} />
                            <button type='submit'>Search</button>
                        </div>
                    </div>
                    <div className='bottom-div'>
                        <p>You may be looking for</p>
                        <div className='card-div'>
                            {list.length && list.map(item => {
                                return <div key={item.title} className={`card ${cardSelected === item.title && 'card-active'}`} onClick={() => setCardSelected(item.title)}>
                                    <img src={item.icon} alt={item.title} />
                                    <p>{item.title}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </form>
            </div>
            <div className='ads-section'>
                <img width='300px' src={img1} alt='ad1' />
                <img width='300px' src={img2} alt='ad2' />
                <img width='300px' src={img1} alt='ad1' />
            </div>
        </div>
    )
}

export default HeroSection
