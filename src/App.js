import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { PokeApi } from './Ejemplos/PokeApi/PokeApi';



function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer greeting="Hola"/> */}
      <PokeApi></PokeApi>
    </>
  );
}

export default App;
