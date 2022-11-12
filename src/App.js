import './App.css';
import MainPage from './pages/mainpage/MainPage';

import { Routes, Route } from 'react-router-dom';
import Enroll from './pages/enrolledpage/Enroll';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/enroll' element={<Enroll />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
