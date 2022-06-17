import React ,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {exerciseOptions , fetchData, youtubeOptions} from '../utils/fetchData';
import ExerciseVedios from '../Comonents/ExerciseVedios';
import SimilarExercises from '../Comonents/SimilarExercises';
import Detail from '../Comonents/Detail';

const ExcerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVedios, setExerciseVedios] = useState([]);
  const [targetMuscelesExercises, setTargetMuscelesExercises] =  useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id}=useParams();

  useEffect(()=>{
    const fetchExerciseData = async()=>{
        const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVediosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
        setExerciseVedios(exerciseVediosData.contents);

        const targetMuscelesExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
        setTargetMuscelesExercises(targetMuscelesExercisesData);

        const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
        setEquipmentExercises(equipmentExercisesData);
    }
    fetchExerciseData();
  },[id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVedios exerciseVedios={exerciseVedios} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscelesExercises={targetMuscelesExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExcerciseDetails