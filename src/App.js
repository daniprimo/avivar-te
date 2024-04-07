import { Container } from '@mui/material';
import './App.css';
import Rotas from './rotas/rotas';
import BarraPrincipal from './components/menu-bar/app-bar';

function App() {
  return (
    <>
      {/*Aqui vai o barre de menu*/}
        <BarraPrincipal />
        <Rotas />  
    </>
  );
}

export default App;
