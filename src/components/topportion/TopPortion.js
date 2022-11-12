import React from 'react';
import './top.css';

const TopPortion = () => {
  return (
    <>
      <div className='firstpart-cnt'>
        <div className='earning-data'>
          <div className='first-cnt-data'>
            <p className='first-cnt-txt'>Referral Earning</p>
            <p className='first-cnt-num'>₹2500</p>
          </div>
          <div className='first-cnt-data'>
            <p className='first-cnt-txt'>Total Referrals</p>
            <p className='first-cnt-num'>7</p>
          </div>
          <div className='first-cnt-data'>
            <p className='first-cnt-txt'>Wallet Balance</p>
            <p className='first-cnt-num'>₹500</p>
          </div>
          <div className='first-cnt-btn'>
            <button className='balance-withdraw-btn'>Withdraw Balance</button>
          </div>
        </div>
        <div className='ref-code-cnt'>
          <p className='ref-code-txt'>Your Referral Code </p>
          <div>
            <p className='ref-code'>E D C H 5 4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPortion;
