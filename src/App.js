import { Container } from '@mui/material';
import './App.css';
import Rotas from './rotas/rotas';
import BarraPrincipal from './components/menu-bar/app-bar';

function App() {
  return (
    <>
       <header id='header'> 
        {/*Aqui vai o barre de menu*/}
        <Container>
          <BarraPrincipal />
          <Rotas />
        </Container>
       </header>  
    </>
  );
}

export default App;
