import React, { useState } from 'react';
import './styles.css';
import logo1 from '../../assets/logo1.png';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // To get the current route
    const [selected, setSelected] = useState('');

    const menuItems = ['Find Doctors', 'Hospitals', 'Medicines', 'Surgeries', 'Software for Provider', 'Facilities'];

    const handleClick = (item) => {
        setSelected(item);

        if (item === "Find Doctors" && location.pathname !== '/details') {
            navigate('/details');
        }
    };
    const navigatetoBookings = () => {
        if (location.pathname !== '/bookings') {
            navigate('/bookings');
        }
    }

    return (
        <div className='navbar-container'>
            <div className='navbar-header'>
                The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
            </div>
            <div className='navbar-body'>
                <a href='/' className='navbar-icon'>
                    <img src={logo1} alt='logo' />
                </a>
                <div className='navbar-menu'>
                    {menuItems.map(item => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className={item === selected ? 'active navbar-btns' : 'navbar-btns'}
                        >
                            {item}
                        </button>
                    ))}
                    <button className='my-bookings-btn' onClick={navigatetoBookings}>My Bookings</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
