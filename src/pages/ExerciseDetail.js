/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData.js';

import SimilarExercises from '../components/SimilarExercises.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import Details from '../components/Details.js';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=/${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData);
        }
        fetchExerciseData();
    }, [id]);

    return (
        <Box>
            <Details exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;