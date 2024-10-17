import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, Grid } from '@mui/material';
import { bookSlot } from '../components/Slices/SlotBookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import BookingModal from '../components/BookingModal/BookingModal';
import AutohideSnackbar from '../components/AutoHideSnackbar/AutoHideSnackbar';
import Carousel from '../components/Swiper';

const SlotBooking = ({ hospitalInfo }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const [showBookingSuccess, setShowBookingSuccess] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);

    const bookedSlotsData = useSelector(state => state.slotBooking.bookedSlotsData);
    const dispatch = useDispatch();

    const handleSlotBooking = (slot, date, hospitalInfo) => {
        setBookingDetails({ ...hospitalInfo, bookingTime: slot, bookingDate: date });
        setIsModalOpen(true);
    };

    const getDate = (daysToAdd = 0) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + daysToAdd);
        return currentDate;
    };

    const getFormattedDate1 = (date) => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        return new Date(date).toLocaleDateString('en-IN', options);
    };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const renderSlots = (slots, date, hospitalInfo) => {
        const selectedDate = new Date(date).toLocaleDateString('en-US');
        return (
            <Grid container spacing={2}>
                {slots.map((slot, index) => {
                    if (bookedSlotsData[selectedDate]) {
                        const id = hospitalInfo['Provider ID'];
                        if (bookedSlotsData[selectedDate][id]) {
                            const result = bookedSlotsData[selectedDate][id].find(item => item === slot);
                            if (result) return null; // Skip already booked slots
                        }
                    }
                    return (
                        <Grid item key={index}>
                            <Button variant="outlined" onClick={() => handleSlotBooking(slot, date, hospitalInfo)}>
                                {slot}
                            </Button>
                        </Grid>
                    );
                })}
            </Grid>
        );
    };

    const slotsData = {};
    const tabLabels = [];

    const slotTimings = {
        morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
        afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'],
        evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
    };

    for (let i = 0; i < 7; i++) {
        const label = getFormattedDate1(getDate(i));
        slotsData[label] = slotTimings;
        const size = slotsData[label].morning.length + slotsData[label].afternoon.length + slotsData[label].evening.length;
        const obj = {
            title: label,
            size,
        };
        tabLabels[i] = obj;
    }

    return (
        <Box sx={{ p: 2, border: '2px solid #2AA7FF' }}>
            {/* Carousel Tabs */}
            <Carousel list={tabLabels} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Time slots display */}
            <Box sx={{ mt: 3 }}>
                {['morning', 'afternoon', 'evening'].map((timeOfDay, idx) => (
                    <Box
                        key={idx}
                        sx={{ display: 'flex', borderBottom: '1px solid #eee', gap: '1rem', alignItems: 'center', mt: 2 }}
                    >
                        <Typography sx={{ mr: 2, display: 'inline', width: '60px', py: 1 }} variant="body1">
                            {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
                        </Typography>
                        {renderSlots(slotsData[tabLabels[selectedTab].title][timeOfDay], tabLabels[selectedTab].title, hospitalInfo)}
                    </Box>
                ))}
            </Box>

            {/* Booking Modal */}
            <BookingModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                bookingDetails={bookingDetails}
                showSuccessMessage={setShowBookingSuccess}
            />

            {/* Snackbar */}
            <AutohideSnackbar
                open={showBookingSuccess}
                setOpen={setShowBookingSuccess}
                message="Booking Successful"
            />
        </Box>
    );
};

export default SlotBooking;
