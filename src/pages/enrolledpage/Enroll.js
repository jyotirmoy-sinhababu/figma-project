import React from 'react';
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav';
import ReferralCode from '../../components/utils/referralcode/ReferralCode';

const Enroll = () => {
  return (
    <>
      <Nav />
      <Header txtContent={'UI/UX > Refer & Earn > Friends Earned'} />
      <ReferralCode />
    </>
  );
};

export default Enroll;
