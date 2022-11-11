import React from 'react';
import './top.css';

const TopPortion = () => {
  return (
    <>
      <div className='firstpart-cnt'>
        <div className='earning-data'>
          <div>
            <p>Referral Earning</p>
            <p>₹2500</p>
          </div>
          <div>
            <p>Total Referrals</p>
            <p>7</p>
          </div>
          <div>
            <p>Wallet Balance</p>
            <p>₹500</p>
          </div>
          <div>
            <p>Withdraw Balance</p>
          </div>
        </div>
        <div className='ref-code-cnt'>
          <p>Your Referral Code </p>
          <div>
            <p>E D C H 5 4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPortion;
