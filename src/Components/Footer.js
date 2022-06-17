import React from 'react';
import {Box , Stack  , Typography} from '@mui/material';

import Logo from '../assets/images/logogym.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap = '40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='300px' height='80px' style={{backgroundColor:'#fff3f4'}}/>
        <Typography variant='h5' pb='40px' mt='20px'>
          Made with ❤️ By Ayushman 
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;