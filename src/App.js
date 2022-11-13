import './App.css';
import MainPage from './pages/mainpage/MainPage';

import { Routes, Route } from 'react-router-dom';
import Enroll from './pages/enrolledpage/Enroll';
import Container from './pages/container/Container';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Container />}>
          <Route index element={<MainPage />} />
          <Route path='/enroll' element={<Enroll />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
