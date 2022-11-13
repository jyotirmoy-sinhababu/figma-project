import React from 'react';
import EnrolledFriend from '../../components/enrolled-friends/EnrolledFriend';
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav';
import ReferralCode from '../../components/utils/referralcode/ReferralCode';

import './enroll.css';

const Enroll = () => {
  return (
    <>
      <Nav />
      <Header txtContent={'UI/UX > Refer & Earn > Friends Earned'} />
      <ReferralCode />
      <div className='heading-cnt'>
        <h3 className='heading'>Friends who enrolled (3)</h3>
        <div className='enrolled-ctn'>
          <EnrolledFriend name={'Dhiraj Saxsena'} amount={'₹185'} />
          <EnrolledFriend name={'Subash Mishra'} amount={'₹485'} />
          <EnrolledFriend name={'Pradul Kumar'} amount={'₹485'} />
        </div>
      </div>
      <div className='terms-cnt'>
        <h3 className='terms-txt'>Terms & Conditions</h3>
      </div>
    </>
  );
};

export default Enroll;
