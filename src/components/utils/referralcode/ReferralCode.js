import './referralcode.css';

const ReferralCode = () => {
  return (
    <div className='code-cnt'>
      <div className='code-txt-cnt'>
        <p className='code-txt'>Your Referral Code </p>

        <div className='code-block'>
          <p className='code'>E D C H 5 4</p>
        </div>
      </div>
      <div className='cnt-data'>
        <p className='cnt-txt'>Wallet Balance</p>
        <p className='cnt-num'>₹500</p>
      </div>
    </div>
  );
};

export default ReferralCode;
