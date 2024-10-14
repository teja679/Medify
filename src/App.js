import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateStates } from './Slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://meddata-backend.onrender.com/states')
        dispatch(updateStates(response.data))
      } catch (err) {
        console.error("Fetching states data failed")
      }
    }
    fetchStates()
  }, [dispatch])
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
