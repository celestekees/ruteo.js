//logo es el nombre de la ruta q va en src={nombre_ruta}

import './App.css';
//componente de router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componentes/home/home';
import MostrarProducto from './componentes/MostrarProductos';
import Registro from './componentes/Registro';
import Login from './componentes/Login';


//todo va adentro de la funcion "app"
//siemrpe tiene q haber un div q englobe todo

//los links de navegacion estan en home
function App() {
  return (
    <>
      
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/producto/:id" element={<MostrarProducto/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
      

    </>
  );
}

export default App;

/* 
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/producto/:id" element={<MostrarProducto/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
        */
