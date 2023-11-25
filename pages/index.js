import * as React from 'react';
import Navbar from '../components/Navbar';
import {Box, Typography} from '@mui/material/';
export default function Page() {
  return (
    <html lang="en">
      <body>
          <Box display='flex' flexDirection='column' gap={8}>
            <Typography>Hi! I'm Diana, a UX Designer based in Denver, CO.</Typography>
            <Typography>content</Typography>
            <Typography>content</Typography>
            <Typography>content</Typography>
          </Box>
      </body>
    </html>
  );
}