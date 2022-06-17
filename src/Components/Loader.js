import React from 'react'
import {Stack} from '@mui/material';
import { PacmanLoader } from 'react-spinners';


const Loader = () => {
  return (
    <Stack direction="row" justifyContent='center' alignItems='center' width='100%'>
        <PacmanLoader color='#ff2625'/>
    </Stack>
  )
}

export default Loader;