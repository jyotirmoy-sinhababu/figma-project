import './mainpage.css';

import rupee from '../../image/rupee.png';
import community from '../../image/community.png';
import Vectorone from '../../image/Vectorone.png';

import Nav from '../../components/navbar/Nav';
import Header from '../../components/header/Header';
import TopPortion from '../../components/topportion/TopPortion';
import Card from '../../components/card/Card';
import { Outlet } from 'react-router-dom';
const MainPage = () => {
  return (
    <>
      <Nav />
      <Header txtContent={'UI/UX > Refer & Earn'} />
      <TopPortion />
      <div className='card-cnt'>
        <h3>How does it work?</h3>
        <Card
          rupee={rupee}
          firstHeading={'Invite your Friends'}
          secondHeading={'share the link tutedude.com with your friends'}
        />
        <Card rupee={rupee} secondHeading={'udgandu'} />
        <Card />
        <Card />
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;
