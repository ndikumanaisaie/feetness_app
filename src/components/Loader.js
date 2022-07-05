/* eslint-disable no-unused-vars */
import React from 'react';
import { Stack } from '@mui/material';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <TailSpin color="gray" />
   </Stack>
);

export default Loader;