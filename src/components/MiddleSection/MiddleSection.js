import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import Drugstore from '../../assets/HeroSection/Drugstore.png'
import Immune from '../../assets/Immune.png'
import BloodSample from '../../assets/Blood Sample.png'
import HeartRateMonitor from '../../assets/Heart Rate Monitor.png'
import HeartRate from '../../assets/Heart Rate.png'
import Stethoscope from '../../assets/Stethoscope.png'
import XRay from '../../assets/X-Ray.png'
import drAhmadKhan from '../../assets/DoctorImages/drAhmadKhan.png'
import drAhmadStevens from '../../assets/DoctorImages/drAhmadStevens.png'
import drAnkur from '../../assets/DoctorImages/drAnkur.png'
import drHeena from '../../assets/DoctorImages/drHeena.png'
import drLesleyHull from '../../assets/DoctorImages/drHull.png'
import './styles.css'
import { Grid, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import Carousel from '../Swiper';

const MiddleSection = () => {
    const list1 = [
        { title: 'Dentistry', icon: Drugstore },
        { title: 'Primary Care', icon: Stethoscope },
        { title: 'Cardiology', icon: HeartRate },
        { title: 'MRI Resonance', icon: HeartRateMonitor },
        { title: 'Blood Test', icon: BloodSample },
        { title: 'Immune', icon: Immune },
        { title: 'Laboratory', icon: Drugstore },
        { title: 'XRay', icon: XRay },
    ]
    const list2 = [
        // { name: 'Dr. Lesley Hull', img: drLesleyHull, specialized: 'Medicine' },
        { name: 'Dr. Ahmad Khan', img: drAhmadKhan, specialized: 'Neurologist' },
        { name: 'Dr. Heena Sachdeva', img: drHeena, specialized: 'Orthopadics' },
        { name: 'Dr. Ankur Sharma', img: drAnkur, specialized: 'Medicine' },
        { name: 'Dr. Ahmad Khan', img: drAhmadKhan, specialized: 'Neurologist' },
        // { name: 'Dr. Heena Sachdeva', img: drHeena, specialized: 'Orthopadics' },
        // { name: 'Dr. Ankur Sharma', img: drAnkur, specialized: 'Medicine' },
        // { name: 'Dr. Ahmad Stevens', img: drAhmadStevens, specialized: 'Neurologist' },
    ]
    return (
        <div className='middile-section'>
            <div className='section1'>
                <h2>Find by specialisation</h2>
                <div className='section1-div'>
                    {list1.length && list1.map(item =>
                        <div key={item.title} className='section1-card'>
                            <img src={item.icon} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )}
                </div>
                <button className='view-all-btn'>View All</button>

            </div >
            <div className='section2'>
                <h2>Our Medical Specialist</h2>
                <div className='section2-div'>
                    <Carousel list={list2} />
                </div>
            </div>
        </div >

    )
}

export default MiddleSection
