import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';
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
    const [message, setMessage] = useState({flag: null, message: null})

    //Use Effect to fetch API Data
    useEffect(() => {
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
        
    }, [])

    //Use effect for message 
    useEffect(() => {
        const time = setTimeout(()=>{
            setMessage({flag: null, message: null})
        }, 3000)
        return () => clearTimeout(time)
    }, [message.flag])

    const handleDelete = async (id) => {
        const response = await fetch('/api/'+id, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        })
        // console.log(response)
        if (response.status === 200){
            const {_id} = await response.json()
            setData(data.filter( (videogame) => videogame._id !== _id))
            setMessage({flag: true, message: "Videogame has been deleted successfully."})
        }else{
            setMessage({flag: false, message: "There was an error deleting your message, pls try again."})
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
                        <img src={`data:${row.photo.contentType};base64,${Buffer.from(row.photo.data, 'base64').toString('base64')}`} alt='' height='100' width='100%'/>                        
                        {/* {console.log(row.photo)} */}
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
            <Link to='/add' className='addItem'>
                <Fab
                size="large" 
                color='success' 
                aria-label="add" 
                sx={{alignSelf: 'end', marginLeft: '10px'}}
                >
                    <AddIcon />
                </Fab>
            </Link>
            <SnackbarMessage state={message}/>
        </Container>
    );
}
