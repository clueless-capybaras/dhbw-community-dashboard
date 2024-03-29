import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navibar from './components/Navibar';
import ErrorModal from './components/ErrorModal';
import Canteen from './components/canteen/Canteen';
import Calendar from './components/calendar/Calendar';
import Settings from './components/settings/Settings';
import CalendarHttpClient from './components/calendar/CalendarHttpClient';
import CanteenHttpClient from './components/canteen/CanteenHttpClient';
import Dualis from './components/dualis/Dualis';
import DualisHttpClient from './components/dualis/DualisHttpClient';
import { AuthGuard } from './components/auth/AuthGuard';

export const CanteenHttpClientContext = createContext(CanteenHttpClient);
export const CalendarHttpClientContext = createContext(CalendarHttpClient);
export const DualisHttpClientContext = createContext(DualisHttpClient);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar cyClass="cy-navBarNav"/>
        <ErrorModal />
        <Routes>
          <Route path='/' element={<Dashboard colWidth='3' cyClass='cy-entryPageNav'/>} />
          <Route path='/canteen/:whichCanteen' element={<CanteenHttpClientContext.Provider value={new CanteenHttpClient()}><Canteen /></CanteenHttpClientContext.Provider>} />
          <Route path='/calendar' element={<CalendarHttpClientContext.Provider value={new CalendarHttpClient()}><Calendar /></CalendarHttpClientContext.Provider>} />
          <Route path='/dualis' element={<DualisHttpClientContext.Provider value={new DualisHttpClient()}><Dualis /></DualisHttpClientContext.Provider>} />
          <Route path='/settings' element={<AuthGuard component={Settings} /> } />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
