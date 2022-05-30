import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import AddUser from './components/Crud/AddUser';
import Landing from './components/Crud/Landing';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Add' element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
