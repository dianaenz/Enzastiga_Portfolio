import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }) => {
  return (
    <Box sx={{background:"radial-gradient(circle, rgba(184,225,255,1) 0%, rgba(232,174,183,1) 100%)", mt: -1, ml: -1, minWidth:'99vw', minHeight:'100vh', overflow: "none"}}>
      <title>My React App</title>
      <Navbar/>
      <Component {...pageProps} />
    </Box>
  );
};

export default App;