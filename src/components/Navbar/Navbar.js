import React, { useState } from 'react'
import './styles.css'
import logo1 from '../../assets/logo1.png'

const Navbar = () => {
    const [selected, setSelected] = useState('')
    const menuItems = ['Find Doctors', 'Hospitals', 'Medicines', 'Surgeries', ' Software for Provider', 'Facilities']
    return (
        <div className='navbar-container'>
            <div className='navbar-header'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</div>
            <div className='navbar-body'>
                <div className='navbar-icon'>
                    <img src={logo1} alt='logo' />
                </div>
                <div className='navbar-menu' >
                    {menuItems && menuItems.map(item => {
                        return <button onClick={() => setSelected(item)} key={item} className={item === selected ? 'active navbar-btns' : 'navbar-btns'}>{item}</button>
                    })}
                    <button className='my-bookings-btn'>My Bookings</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
