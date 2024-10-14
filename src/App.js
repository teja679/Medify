import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchStates, updateStates } from './Slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStates())
    //   const fetchStates = async () => {
    //     try {
    //       const response = await axios.get('https://meddata-backend.onrender.com/states')
    //       // localStorage.setItem('states', JSON.stringify(response.data))
    //       dispatch(updateStates(response.data))
    //     } catch (err) {
    //       console.error("Fetching states data failed")
    //     }
    //   }
    //   fetchStates()
  }, []);
  return (
    <div className='App'>
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
