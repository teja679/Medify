import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStates } from './components/Slices/HosiptalSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStates())
  }, [dispatch]);
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
