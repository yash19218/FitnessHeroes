import React from 'react';
import {Box , Stack , Typography} from '@mui/material'; 
// import { css } from "@emotion/react";
// import {  PacmanLoader } from 'react-spinners';

import Loader from './Loader';

const ExerciseVedios = ({exerciseVedios , name}) => {
  // console.log(exerciseVedios);
  // const override = css`
  // display: block;
  // margin: 0 700px;
  // border-color: #ff2625;  
  // `;
  if(!exerciseVedios.length){
    return (
      // <PacmanLoader  color="#ff2625" size={40} css={override}/>
      <Loader/>
    );
  }
  return (
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{textTransform:'capitalize',color:'#ff2625'}}>{name}</span>
        {` `}Exercise Vedios
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
        flexDirection: {lg:'row'},
        gap:{lg:'110px',xs:'0'} 
      }}>
        {exerciseVedios?.slice(0,6).map((item,index) => (
          <Box>
          <Typography textTransform='capitalize' fontWeight={600} variant='h6' color="purple">
            {item.video.channelName}
          </Typography>
          <a
            key={index}
            className='exercise-vedio'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
          <img src={item.video.thumbnails[0].url} alt={Object.values(item)[0]['title']}/>
          </a>
          <Typography  textTransform='capitalize' variant='h6' color="#ff2625">
            {item.video.title.substring(0,30)+"..."}
          </Typography>
          <Typography ><img style = {{marginBottom:'-5px',width:'20px',height:'20px'}}src="https://cdn-icons-png.flaticon.com/128/709/709612.png"/>{` `}{item.video.viewCountText.substring(0,item.video.viewCountText.indexOf("views"))}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVedios;