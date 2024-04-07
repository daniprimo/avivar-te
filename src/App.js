import { Container } from '@mui/material';
import './App.css';
import Rotas from './rotas/rotas';
import BarraPrincipal from './components/menu-bar/app-bar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
       <header id='header'> 
        {/*Aqui vai o barre de menu*/}
        <Container>
          <BarraPrincipal />
          <Rotas />
          <Footer />
        </Container>
       </header>  
    </>
  );
}

export default App;
