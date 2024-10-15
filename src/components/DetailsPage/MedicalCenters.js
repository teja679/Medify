import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateCities, updateHopitalsData } from '../../Slice';
import { useSnackbar } from 'notistack-v2-maintained';
import { Warning } from '@mui/icons-material';
import Form from '../Form/Form';
import sensodyneImg from '../../assets/sensodyne_dweb.png'
import verified from '../../assets/verified.png'
import hospitalPic from '../../assets/hospitalPic.png'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Typography } from '@mui/material';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import SlotBooking from './SlotBooking';


const MedicalCenters = () => {
  const hospitals = useSelector(state => state.hospitalsData)
  const state = useSelector(state => state.state)
  return (
    <div className={styles.containerDiv}>
      {hospitals && hospitals.length > 0 ?
        <>
          <p><b>{`${hospitals.length} medical centers available in ${state}`}</b></p>
          <p><img src={verified} alt='Verified' /> Book appointments with minimum wait-time & verified doctor details</p>
          <div className={styles.container}>
            <div className={styles.hContainerDiv}>
              {hospitals.map(item =>
                // <div key={item['Phone Number']} className={styles.hContainer}>
                <div key={item['Phone Number']} className={styles.hContainer}>
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
