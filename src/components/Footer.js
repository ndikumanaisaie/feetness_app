/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
    <Box>
        <Stack
            gap="20px"
            alignItems="center"
            px="40px"
            pt="24px"
        >
            <img 
                src={Logo}
                alt="footer logo"
                width="200px"
                height="48px"
            />

            <Typography
                variant="h5"
                pb="40px"
                mt="20px"
            >
                Made with Love by Ndikumana Isaie
            </Typography>
        </Stack>
    </Box>
);

export default Footer;