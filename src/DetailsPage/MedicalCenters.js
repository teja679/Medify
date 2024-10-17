import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import sensodyneImg from './../assets/sensodyne_dweb.png'
import verified from './../assets/verified.png'
import hospitalPic from './../assets/hospitalPic.png'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Typography } from '@mui/material';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import SlotBooking from './SlotBooking';
import { useParams } from 'react-router';
import { fetchHospitalsData } from '../components/Slices/HosiptalSlice';
import { useSearchParams } from 'react-router-dom';


const MedicalCenters = () => {
  const [seachParams, setSeachParams] = useSearchParams();
  const dispatch = useDispatch()
  const [state, setState] = useState(seachParams.get("state"));
  const [city, setCity] = useState(seachParams.get("city"));

  useEffect(() => {
    setState(seachParams.get("state"));
    setCity(seachParams.get("city"));
  }, [seachParams]);

  const hospitals = useSelector(state => state.medical.hospitalsData)
  return (
    <div className={styles.containerDiv}>
      {hospitals && hospitals.length > 0 ?
        <>
          <p><b>{`${hospitals.length} medical centers available in ${city}, ${state}`}</b></p>
          <p><img src={verified} alt='Verified' /> Book appointments with minimum wait-time & verified doctor details</p>
          <div className={styles.container}>
            <div className={styles.hContainerDiv}>
              {hospitals.map(item =>
                // <div key={item['Phone Number']} className={styles.hContainer}>
                <div key={item['Provider ID']} className={styles.hContainer}>
                  <Accordion>
                    <AccordionSummary>

                      <img width='150px' height='150px' src={hospitalPic} alt="Hospital Icon" />
                      <div className={styles.hDetails}>
                        <h3 className={styles.hName}>{item['Hospital Name']}</h3>
                        <p className={styles.hAddress}>
                          <b>{item.Address}, {item.City}, {item.State}, {item['ZIP Code']}</b>
                        </p>
                        <p>{item['Hospital Type']}</p>
                        <p>{item['Hospital Ownership']}</p>
                        <div className={styles.consultation}>
                          <p className={styles.consultationFee}>
                            <span>{'FREE '}</span>
                            <p className={styles.price}> {'₹'}500</p>{' Consultation fee at clinic'}
                          </p>
                          <Button variant="contained" sx={{ background: '#00A500', width: 'fit-content' }}>
                            <ThumbUpAltSharpIcon sx={{ color: '#FFFFFF', mr: 1 }} />{' '}
                            <Typography> {item['Hospital overall rating']} </Typography>
                          </Button>
                        </div>
                      </div>
                      <div className={styles.bookingBtn}>
                        <Button variant="text" sx={{ color: '#00A500', fontWeight: 500 }}>
                          Available Today
                        </Button>
                        <Button variant="contained" sx={{ background: '#2AA7FF' }}>
                          Book FREE Center Visit
                        </Button>

                      </div>

                    </AccordionSummary>
                    <AccordionDetails>
                      <SlotBooking hospitalInfo={item} />
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div >
              <img width='250px' src={sensodyneImg} alt='Sensodyne dweb' />
            </div>
          </div>
        </>
        : <div className={styles.noData}>
          <p>No medical centers available in your selected area.</p>
        </div>
      }
    </div >
  )
}

export default MedicalCenters
