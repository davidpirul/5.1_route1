import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import Home from './components/Home';
import Contacto from './components/Contacto';

function App() {
  return (
    <BrowserRouter>

      <Navegacion />

      <Routes>
        <Route path='/home' element={<Home />}>
        </Route>
        <Route path='/contacto' element={<Contacto />}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
