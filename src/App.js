import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './HomePage/HomePage';
import DetailsPage from './DetailsPage/DetailsPage';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStates } from './components/Slices/HosiptalSlice';
import MyBookings from './components/MyBookings/MyBookings';
import { updateSlots } from './components/Slices/SlotBookingSlice';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchStates());
    dispatch(updateSlots());
  }, [dispatch]);
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/bookings" element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
