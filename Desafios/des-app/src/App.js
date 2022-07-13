import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/home" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/categoria/:idcategoria" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
    

  );
}

export default App;
