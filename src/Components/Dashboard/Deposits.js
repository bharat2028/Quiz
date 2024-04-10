import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import logo from './img/Python-logo-notext.svg (1).png'

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title sx={{color:'white'}}>Your Rank</Title>
      <Typography component="p" variant="h4" sx={{color:'white'}}>
        572
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1, color:'white'}}>
        Python predator
      </Typography>
      <div>
        <img src={logo}/>
      </div>
    </React.Fragment>
  );
}