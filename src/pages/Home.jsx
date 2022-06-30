/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box } from '@mui/material';
import Exercises from '../components/Exercises.jsx';
import SearchExercises from '../components/SearchExercises.jsx';
import HeroBanner from '../components/HeroBanner.jsx';

const Home = () => (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
    </Box>
);

export default Home;