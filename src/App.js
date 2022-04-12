import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Contacto } from './components/Contacto';
import { Nosotros } from './components/Nosotros';
import { PokeApi } from './Ejemplos/PokeApi/PokeApi';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
      
        <NavBar/>

        <Routes>
          <Route path="/" element={ <ItemListContainer/> }/>
          <Route path="/productos/:catId" element={ <ItemListContainer/> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
          {/* <Route path="/nosotros" element={ <Nosotros/> }/> */}
          {/* <Route path="/contacto" element={ <Contacto/> }/> */}
          <Route path="/poke-api" element={ <PokeApi/> }/>
          
          <Route path="*" element={ <Navigate to='/'/> }/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
