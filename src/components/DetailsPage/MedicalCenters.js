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
import AccordionUsage from './Accordion';


const MedicalCenters = () => {
  const hospitals = useSelector(state => state.hospitalsData)
  return (
    <div className={styles.containerDiv}>
      {hospitals && hospitals.length > 0 ?
        <>
          <p><b>{hospitals.length} medical centers available in Alaska</b></p>
          <p><img src={verified} alt='Verified' /> Book appointments with minimum wait-time & verified doctor details</p>
          <div className={styles.container}>
            <div className={styles.hContainerDiv}>
              {hospitals.map(item =>
                <div key={item['Phone Number']} className={styles.hContainer}>
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
/* Address
: 
"1026 A AVE NE"
City
: 
"CEDAR RAPIDS"
County Name
: 
"LINN"
Effectiveness of care national comparison
: 
"Same as the national average"
Effectiveness of care national comparison footnote
: 
""
Efficient use of medical imaging national comparison
: 
"Same as the national average"
Efficient use of medical imaging national comparison footnote
: 
""
Emergency Services
: 
"Yes"
Hospital Name
: 
"ST LUKES HOSPITAL"
Hospital Ownership
: 
"Voluntary non-profit - Private"
Hospital Type
: 
"Acute Care Hospitals"
Hospital overall rating
: 
4
Hospital overall rating footnote
: 
""
Meets criteria for meaningful use of EHRs
: 
"Y"
Mortality national comparison
: 
"Same as the national average"
Mortality national comparison footnote
: 
""
Patient experience national comparison
: 
"Above the national average"
Patient experience national comparison footnote
: 
""
Phone Number
: 
3193697211
Provider ID
: 
160045
Readmission national comparison
: 
"Same as the national average"
Readmission national comparison footnote
: 
""
Safety of care national comparison
: 
"Above the national average"
Safety of care national comparison footnote
: 
""
State
: 
"Iowa"
Timeliness of care national comparison
: 
"Same as the national average"
Timeliness of care national comparison footnote
: 
""
ZIP Code
: 
52402 */