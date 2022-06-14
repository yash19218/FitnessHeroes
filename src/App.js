import React from 'react';
import {Route , Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css'
import Navbar from './Comonents/Navbar';
import Footer from './Comonents/Footer';
import Home from './Pages/Home';
import ExcerciseDetails from './Pages/ExcerciseDetails'; 

const App = () => {
  return (
    <Box width = "400px">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/excercise/:id" element={<ExcerciseDetails/>}></Route>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App;