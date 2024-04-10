import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container,Paper } from '@mui/material';
import { useEffect,useState ,useStlyes} from 'react';

export default function Student() 
{
    const[name,setName]=useState('')
    const[add,setAdd]=useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('<http://localhost:8080/view/insert>', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => console.log('User created:', data))
        .catch(error => console.error('Error creating user:', error));
      };
  return (
   <>
   <h1>ADD STUDENT</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" label="Student name" variant="outlined"  
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student ADD" variant="outlined" 
      value={add}
      onChange={(e)=>setAdd(e.target.value)}/>
      
      </Box>
      <Button variant='contained' color='secondary' onClick={handleSubmit}>Submit</Button>
      <div>
      {name}
      {add}
      </div>

    </>
    
  );
}