import React from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import sensodyneImg from '../../assets/sensodyne_dweb.png'
import hospitalPic from '../../assets/hospitalPic.png'
import { Button, Typography } from '@mui/material';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import { useSelector } from 'react-redux';

const MyBookings = () => {

  const hospitals = useSelector(state => state.slotBooking.hospitalData);
  const bookedSlotsData = useSelector(state => state.slotBooking.bookedSlotsData);

  // localStorage.setItem('hospitals', JSON.parse(hospitals))
  // localStorage.setItem('bookedSlotsData', JSON.parse(bookedSlotsData))
  const getFormattedDate = (date) => {
    // const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-IN', options);
  };
  const handleSubmit = () => {

  }
  return (
    <div className={styles.myBookings}>
      <Navbar />
      <div className={styles.box}></div>
      <div className={styles.searchForm}>
        <h2>My Bookings</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <input type='text' placeholder='Search By Hospital' />
          </div>
          <div className={styles.btnDiv} onClick={handleSubmit}>
            <SearchIcon sx={{ color: '#FFFFFF' }} />
            <button type='submit'>Search</button>
          </div>
        </form>
      </div>
      <div className={styles.containerDiv}>
        {hospitals && Object.keys(hospitals).length > 0 ?

          <div className={styles.container}>
            <div className={styles.hContainerDiv}>
              {Object.keys(bookedSlotsData).map(key =>
                Object.keys(bookedSlotsData[key]).map(provisionId =>
                  bookedSlotsData[key][provisionId].map(slot => {

                    return <div key={hospitals[provisionId]['Provider ID'] + slot} className={styles.hContainer}>
                      <img width='150px' height='150px' src={hospitalPic} alt="Hospital Icon" />
                      <div className={styles.hDetails}>
                        <h3 className={styles.hName}>{hospitals[provisionId]['Hospital Name']}</h3>
                        <p className={styles.hAddress}>
                          <b>{hospitals[provisionId].Address}, {hospitals[provisionId].City}, {hospitals[provisionId].State}, {hospitals[provisionId]['ZIP Code']}</b>
                        </p>
                        <p>{hospitals[provisionId]['Hospital Type']}</p>
                        <p>{hospitals[provisionId]['Hospital Ownership']}</p>
                        <div className={styles.consultation}>
                          <Button variant="contained" sx={{ background: '#00A500', width: 'fit-content' }}>
                            <ThumbUpAltSharpIcon sx={{ color: '#FFFFFF', mr: 1 }} />{' '}
                            <Typography> {hospitals[provisionId]['Hospital overall rating']} </Typography>
                          </Button>
                        </div>
                      </div>
                      <div className={styles.bookingBtn}>
                        <Button variant="outlined" sx={{ color: '#2AA7FF', fontWeight: 500 }}>
                          {slot}
                        </Button>
                        <Button variant="outlined" sx={{ color: '#00A500' }}>
                          {getFormattedDate(key)}
                        </Button>

                      </div>
                    </div>

                  })))}
            </div>
            <div >
              <img width='250px' src={sensodyneImg} alt='Sensodyne dweb' />
            </div>
          </div>

          : <div className={styles.noData}>
            <p>No slots booked.</p>
          </div>
        }
      </div >
    </div >
  )
}

export default MyBookings
