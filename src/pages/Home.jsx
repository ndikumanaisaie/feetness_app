/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box } from '@mui/material';
import Exercises from '../components/Exercises.jsx';
import SearchExercises from '../components/SearchExercises.jsx';
import HeroBanner from '../components/HeroBanner.jsx';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (

        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={ setExercises }
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={ setExercises }
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
        </Box>
  );
};

export default Home;