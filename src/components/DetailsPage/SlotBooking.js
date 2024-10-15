import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, Grid2 } from '@mui/material';

export const TabContent = ({ item1, item2 }) => {
    return (
        <>
            <Typography sx={{ fontWeight: 600, color: '#444' }}>{item1}</Typography>
            <Typography sx={{ fontSize: '10px', color: '#00A500' }}>
                {item2} slots available
            </Typography>
        </>
    );
};
const SlotBooking = ({ hospitalInfo }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleSlotBooking = (slot, date, hospitalInfo) => {
        
    }

    // Function to get a date 'n' days from today
    const getDate = (daysToAdd = 0) => {
        const today = new Date();
        today.setDate(today.getDate() + daysToAdd);
        return today;
    };

    // Format the date in 'weekday, day, month' format
    const getFormattedDate = (date) => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        return new Date(date).toLocaleDateString('en-IN', options);
    };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    // Function to render available time slots
    const renderSlots = (slots, date, hospitalInfo) => {
        return <Grid2 container spacing={2} >
            {
                slots.map((slot, index) => (
                    <Grid2 item key={index}>
                        <Button variant="outlined" onClick={() => handleSlotBooking(slot, date, hospitalInfo)}>
                            {slot}
                        </Button>
                    </Grid2>
                ))
            }
        </Grid2 >
    }

    // Tab label data and slot availability
    const tabLabels = [getDate(0), getDate(1), getDate(2)];
    const slotsData = new Map();
    tabLabels.forEach((label, index) => {
        slotsData.set(label, {
            morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
            afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'],
            evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
        });
    });

    return (
        <Box sx={{ p: 2, border: '2px solid #2AA7FF' }}>
            {/* Tab section */}
            <Tabs value={selectedTab} onChange={handleChange} centered>
                {tabLabels.map((label, index) => (
                    <Tab
                        key={index}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                        label={
                            <TabContent
                                item1={index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : getFormattedDate(label)}
                                item2={slotsData.get(label).morning.length + slotsData.get(label).afternoon.length + slotsData.get(label).evening.length}
                            />
                        }
                    />
                ))}
            </Tabs>

            {/* Time slots display */}
            <Box sx={{ mt: 3 }}>
                {['morning', 'afternoon', 'evening'].map((timeOfDay, idx) => (
                    <Box key={idx} sx={{ display: 'flex', borderBottom: '1px solid #eee', gap: '1rem', alignItems: 'center', mt: 2 }}>
                        <Typography sx={{ mr: 2, display: 'inline', width: '60px', py: 1 }} variant="body1">
                            {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
                        </Typography>
                        {renderSlots(slotsData.get(tabLabels[selectedTab])[timeOfDay], tabLabels[selectedTab], hospitalInfo)}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SlotBooking;
