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
import { Box, Button, Chip, Typography } from '@mui/material';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import MedicalCenters from './MedicalCenters';
import Navbar from '../Navbar/Navbar';
const DetailsPage = () => {
  return (
    <div className={styles.detailsPage}>
      <Navbar />
      <div className={styles.box}></div>
      <div className={styles.searchForm}>
        <Form />
      </div>
      <MedicalCenters />
    </div >
  )
}

export default DetailsPage

