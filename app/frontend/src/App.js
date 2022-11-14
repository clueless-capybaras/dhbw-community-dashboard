import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navibar from './components/Navibar';
import Canteen from './components/Canteen';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/canteen' element={<Canteen />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
