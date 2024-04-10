import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, Rank, name, username, Points, amount) {
  return { id, Rank, name, username, Points, amount };
}

const rows = [
  createData(
    0,
    '1',
    'Micheal',
    'micheal2321',
    '2998',
  ),
  createData(
    1,
    '2',
    'Veerapan',
    'Veerapan_5',
    '2574',
  ),
  createData
  (
    2, 
    '3', 
    'Nitheesh', 
    'Nithxxsh.62', 
    '2231', 
    ),
  createData(
    3,
    '4',
    'Muhmad Abdul',
    'Muhmad._.3',
    '2020',
  ),
  createData(
    4,
    '5',
    'Karmegha Kuzhali',
    'kk_313',
    '1964',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Leaderboard</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Rank}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.Points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See More
      </Link>
    </React.Fragment>
  );
}