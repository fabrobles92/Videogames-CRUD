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
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import './Landing.css'

export default function BasicTable({rows}) {
  return (
    <Container>
        {console.log('Renderizando Landing')}
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
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '171px' }}
                >
                <TableCell >
                    <img src={row.photo} alt='Video Game Picture' height='100' width='100'/>
                    {/* HOLA */}
                </TableCell>
                <TableCell align="center">
                    <h3>{row.name}</h3>
                </TableCell>
                <TableCell align="center">{row.year}</TableCell>
                <TableCell align="center">
                    <ul>
                        {row.console.map((console) => <li key={console}>{console}</li>)}            
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
        <Link to='/add'>
            <Fab
            size="large" 
            color='success' 
            aria-label="add" 
            sx={{alignSelf: 'end', marginLeft: '10px'}}
            >
                <AddIcon />
            </Fab>
        </Link>
        
    </Container>
  );
}
