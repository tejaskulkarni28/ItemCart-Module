import './App.css';
import Main from './OrderFoodModule/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
