import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ mt: 5, p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Typography variant="body1">
                &copy; 2024 Warehouse Management
            </Typography>
        </Box>
    );
};

export default Footer;
