import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navibar from './components/Navibar';
import Canteen from './components/canteen/Canteen';
import Calendar from './components/Calendar';
import CanteenHttpClient from './components/canteen/CanteenHttpClient';

export const CanteenHttpClientContext = createContext(CanteenHttpClient);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/canteen/:whichCanteen' element={<CanteenHttpClientContext.Provider value={new CanteenHttpClient()}><Canteen /></CanteenHttpClientContext.Provider>} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
