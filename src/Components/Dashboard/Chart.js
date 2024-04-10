import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Day 1', 4),
  createData('Day 2', 5),
  createData('Day 3', 8),
  createData('Day 4', 3),
  createData('Day 5', 2),
  createData('Day 6', 6),
  createData('Day 7', 6),
  createData('Day 8', 8),
  createData('Day 9', 9),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        
      </ResponsiveContainer>
    </React.Fragment>
  );
}