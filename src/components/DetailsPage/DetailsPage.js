import React from 'react'
import styles from './styles.module.css'
import Form from '../Form/Form';
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

