import './mainpage.css';

import community from '../../image/community.png';
import rupee from '../../image/rupee.svg';
import wallet from '../../image/wallet.svg';
import referral from '../../image/referral.svg';

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
          Img={community}
          firstTxt={'Invite your Friends'}
          secondTxt={'share the link tutedude.com with your friends'}
        />
        <Card
          Img={rupee}
          firstTxt={'You get ₹200 as referral money'}
          secondTxt={'On total purchase the friend makes, into your wallet'}
        />
        <Card
          Img={wallet}
          firstTxt={'Transfer money from your wallet'}
          secondTxt={
            'When the wallet balance reaches ₹200 or more, you can withdraw it'
          }
        />
        <Card
          Img={referral}
          firstTxt={'Friend purchases any courses'}
          secondTxt={'Using your REFERRAL CODE in the payment page'}
        />
      </div>
      <div className='page-end'>
        <p>Friends Who Enrolled</p>
        <p>Terms & Conditions</p>
      </div>
      <Outlet />
    </>
  );
};

export default MainPage;
