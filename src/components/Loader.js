import React from 'react'
import { Stack } from '@mui/material'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
   <Stack 
    direction="row"
    justifyConent="center"
    alignItems="center"
    width="100%"
   >
    <TailSpin color="gray" />
   </Stack>
  )
}

export default Loader