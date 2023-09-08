import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Options from './components/options/Options';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/order' element={<Options />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
