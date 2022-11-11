import './App.css';
import MainPage from './pages/mainpage/MainPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
