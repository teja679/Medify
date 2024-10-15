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
import Form from '../Form/Form'

const HeroSection = () => {
    const navigate = useNavigate();
    const [cardSelected, setCardSelected] = useState('')

    const handleNavigate = () => {
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
                <div className='hero-form-div'>
                    <Form handleNavigate={handleNavigate} flag={true} />
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
                </div>
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
