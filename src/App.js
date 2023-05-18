import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import EntregaDomicilio from './pages/EntregaDomicilio/EntregaDomicilio';
import Menu from './pages/Menu/Menu';
import Contacto from './pages/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/EntregaDomicilio' element={<EntregaDomicilio/>}/>
        <Route exact path='/Menu' element={<Menu/>}/>
        <Route exact path='/Contacto' element={<Contacto/>}/>

      </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;
