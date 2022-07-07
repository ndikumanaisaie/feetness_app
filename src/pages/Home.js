/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box } from '@mui/material';
import Exercises from '../components/Exercises.js';
import SearchExercises from '../components/SearchExercises.js';
import HeroBanner from '../components/HeroBanner.js';

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
                exercises={exercises}
                bodyPart={bodyPart}
            />
        </Box>
  );
};

export default Home;