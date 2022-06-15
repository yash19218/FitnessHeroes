import React ,{useState} from 'react';
import  {Box} from '@mui/material';

import HeroBanner from '../Comonents/HeroBanner';
import SearchExcercises from '../Comonents/SearchExcercises';
import Excercises from '../Comonents/Excercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home