import React ,{useState} from 'react';
import  {Box} from '@mui/material';

import HeroBanner from '../Comonents/HeroBanner';
import SearchExcercises from '../Comonents/SearchExcercises';
import Excercises from '../Comonents/Excercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </Box>
  )
}

export default Home