import React from 'react'
import {Box , Typography , Stack} from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscelesExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h3' mb={5}>Exercises that target the Muscle group</Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
          {targetMuscelesExercises.length ?
          <HorizontalScrollbar data={targetMuscelesExercises}/> : <Loader/>}
      </Stack>
      <Typography variant='h3' mb={5}>Exercises that uses the Same Equipment</Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
          {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises