import * as React from 'react';
import Navbar from '../components/Navbar';
import {Box, Typography} from '@mui/material/';


export default function Page() {
  return (
    <html lang="en">
      <body>
          <Navbar/>
          <Box display='flex' flexDirection='column' gap={8} sx={{background:"radial-gradient(circle, rgba(184,225,255,1) 0%, rgba(232,174,183,1) 100%)"}}>
            <Typography>Hi! I'm Diana, a UX Designer based in Denver, CO.</Typography>
            <Typography>content</Typography>
            <Typography>content</Typography>
            <Typography>content</Typography>
          </Box>
      </body>
    </html>
  );
}