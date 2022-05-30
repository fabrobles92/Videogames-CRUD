import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '../Container/Container';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import './Landing.css'

function createData(id, photo, name, console, releaseYear, description) {
  return {id, photo, name, console, releaseYear, description };
}

const rows = [
  createData(1, 'https://picsum.photos/2501/2500', 'Mario Bros', ['nes'], '1984', 'Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et '),
  createData(2, 'https://picsum.photos/2501/2500', 'Starfox', ['nes', 'pc'], '1994', 'Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et '),
];


export default function BasicTable() {
  return (
    <Container>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">Photo</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Console</TableCell>                
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                
                >
                <TableCell >
                    <img src={row.photo} height='100' width='100'/>
                    {/* HOLA */}
                </TableCell>
                <TableCell align="center">
                    <h3>{row.name}</h3>
                </TableCell>
                <TableCell align="center">{row.releaseYear}</TableCell>
                <TableCell align="center">
                    <ul>
                        {row.console.map((console) => <li>{console}</li>)}            
                    </ul>
                </TableCell>
                <TableCell align="center">
                    <h5>{row.description}</h5>
                </TableCell>
                <TableCell align='center'>
                    <div className='actions'>
                        <Link to={`/edit/${row.id}`} className='actionLinks' >
                            <EditIcon sx={{fontSize: "2.5rem"}}/>
                        </Link>
                        <Link to={`delete/${row.id}`} className='actionLinks'>
                            <DeleteForeverIcon sx={{fontSize: "2.5rem"}}/>
                        </Link>
                    </div>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
  );
}
