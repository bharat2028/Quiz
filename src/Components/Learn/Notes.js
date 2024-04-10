import React from 'react'
import './Notes.css'
import Button from '@mui/material/Button';

const Notes = () => {
  return (
    <div className='bgNotes'> 
    <h3 className='textNo'>No notes have been taken</h3>
    <Button href='/Dashboard' variant="contained">Home</Button>
    </div>
  )
}

export default Notes