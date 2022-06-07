import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import AddVideoGame from './components/AddVideoGame/AddVideoGame';
import EditVideoGame from './components/EditVideoGame/EditVideoGame'

function App() {
  return (
    <div className="App">
      {console.log('Renderizando App')}
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/Add' element={<AddVideoGame />}/>
          <Route path='/Edit/:id' element={<EditVideoGame />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
