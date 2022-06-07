import * as React from 'react';
import { useEffect, useState } from 'react';
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
import SnackbarMessage from './SnackbarMessage';
import './Landing.css'

export default function BasicTable() {
    const [data, setData] = useState([])
    const [deletedID, setDeletedID] = useState([])
    const [message, setMessage] = useState(null)

    //Use Effect to fetch API Data
    useEffect(() => {
        // console.log('Use effect utilizado 1')
        const getData = async() => {
            const response = await fetch('/api', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
                }
            )
            const data = await response.json()            
            setData(data)   
        }
        getData()
        
    }, [deletedID])

    //Use effect for message 
    useEffect(() => {
        // console.log('Use effect utilizado 2', message)
        const time = setTimeout(()=>{
            setMessage(null)
        }, 5000)
        return () => clearTimeout(time)
    }, [message])
    
    const handleClose = (event, reason) => {
        // console.log(reason)
        if (reason === 'clickaway') {
          return;
        }
    
        setMessage(null);
      };

    const handleDelete = async (id) => {
        const response = await fetch('/api/'+id, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        })
        console.log(response)
        if (response.status === 200){
            const {_id} = await response.json()
            setDeletedID(_id)
            setMessage(true)
        }else{
            setMessage(false)
        }
    }

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
                {data.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '171px' }}
                    >
                    <TableCell >
                        <img src={row.photo} alt='' height='100' width='100'/>
                    </TableCell>
                    <TableCell align="center">
                        <h3>{row.name}</h3>
                    </TableCell>
                    <TableCell align="center">{row.year}</TableCell>
                    <TableCell align="center">
                        <ul>
                            {row.consoles.map((console) => <li key={console}>{console}</li>)}            
                        </ul>
                    </TableCell>
                    <TableCell align="center">
                        <h5>{row.description}</h5>
                    </TableCell>
                    <TableCell align='center'>
                        <div className='actions'>
                            <Link to={`/edit/${row._id}`} className='actionLinks' >
                                <EditIcon sx={{fontSize: "2.5rem"}}/>
                            </Link>
                            <Link to={"#"} className='actionLinks' onClick={() => handleDelete(row._id)}>
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
            <SnackbarMessage state={message} handleClose={handleClose}/>
        </Container>
    );
}
