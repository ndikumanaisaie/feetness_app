import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
   <Stack 
    direction="row"
    justifyConent="center"
    alignItems="center"
    width="100%"
   >
    <InfinitySpin color="gray" />
   </Stack>
  )
}

export default Loader