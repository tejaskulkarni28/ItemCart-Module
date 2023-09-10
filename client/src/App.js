import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Options from './components/options/Options';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/order' element={<Options />} />
          <Route path='/order/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
