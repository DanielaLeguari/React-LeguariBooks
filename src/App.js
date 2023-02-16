
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favoritos from './Pages/Favoritos';
import Categorias from './Pages/Categorias';
import MinhaEstante from './Pages/MinhaEstante';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/favoritos" element={<Favoritos/>} />
          <Route path="/minhaestante" element={<MinhaEstante />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
