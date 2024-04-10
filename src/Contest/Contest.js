import React from 'react'
import './Contest.css'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Contest = () => {
  return (
    <>
    <div className='con'>
    <h1>
    Not Yet Started
    </h1>
    <Button href='/Dashboard' variant="contained">Home</Button>
    </div>
    </>
  )
}

export default Contest