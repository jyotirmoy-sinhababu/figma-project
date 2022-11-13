import './mainpage.css';

import community from '../../image/community.png';
import rupee from '../../image/rupee.svg';
import wallet from '../../image/wallet.svg';
import referral from '../../image/referral.svg';

import Nav from '../../components/navbar/Nav';
import Header from '../../components/header/Header';
import TopPortion from '../../components/topportion/TopPortion';
import Card from '../../components/card/Card';
const MainPage = () => {
  return (
    <>
      <Nav />
      <Header txtContent={'UI/UX > Refer & Earn'} />
      <TopPortion />
      <div className='first-heading-cnt'>
        <h3 className='first-heading'>How does it work?</h3>
      </div>
      <div className='card-cnt'>
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
        <p className='page-end-txt'>Friends Who Enrolled</p>
        <p className='page-end-txt'>Terms & Conditions</p>
      </div>
    </>
  );
};

export default MainPage;
