import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';



function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola"/>
    </>
  );
}

export default App;
