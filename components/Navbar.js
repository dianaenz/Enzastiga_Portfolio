import React from 'react';
import {Box, Typography} from '@mui/material/';
import Link from 'next/link';
export default function Navbar() {
  return (
    <Box display={"flex"} flexDirection={"row"} sx={{backgroundColor:"#B8E1FF", justifyContent:"space-between", alignItems:'center'}}> 
        <Link href='/'>
            <Box display='flex' flexDirection='row' gap={1} ><Typography variant="h2">DE</Typography></Box>
        </Link>
        <Box display='flex' flexDirection='row' gap={3} sx={{alignItems:'center'}}>
        <Typography>About Me</Typography>
        <Typography>Resume</Typography>
        <Link href='/contact'>Contact Me</Link></Box>
    </Box>         
  );
}
