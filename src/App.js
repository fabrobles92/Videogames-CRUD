import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import AddVideoGame from './components/AddVideoGame/AddVideoGame';
import EditVideoGame from './components/EditVideoGame/EditVideoGame'
import DeleteVideoGame from './components/DeleteVideoGame/DeleteVideoGame';


function createData(id, photo, name, console, year, description) {
  return {id, photo, name, console, year, description };
}

const rows = [
  createData(1, 'https://picsum.photos/2501/2500', 'Mario Bros', ['xbox'], '1984', 'Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et '),
  createData(2, 'https://picsum.photos/2501/2500', 'Starfox', ['pc', 'xbox'], '1994', 'r et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et '),
  createData(3, 'https://picsum.photos/2501/2500', 'Starfox', ['ps4', 'pc'], '1994', 'Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et '),
  createData(4, 'http', 'Starfox', ['nes', 'pc'], '1994', 'Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et Ipsum Lorem Dolor et '),
]



function App() {
  const [data, setData] = useState(rows)
  // useEffect(() => {
  //   // console.log('Montando')
  //   setData(data)

  // },)
  
  const addData = (newData) => {
    setData(newData)
  }

  return (
    <div className="App">
      {console.log('Renderizando App')}
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Landing rows={data}/>}/>
          <Route path='/Add' element={<AddVideoGame rows={data} addData={addData}/>}/>
          <Route path='/Edit/:id' element={<EditVideoGame rows={data} addData={addData}/>}/>
          <Route path='/Delete/:id' element={<DeleteVideoGame rows={data} addData={addData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
