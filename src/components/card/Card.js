import './card.css';

const Card = ({ Img, firstTxt, secondTxt }) => {
  return (
    <div className='main-card-cnt'>
      <div className='img-cnt'>
        <img className='img' src={Img} alt='' />
      </div>
      <div className='txt-cnt'>
        <p className='first-txt'>{firstTxt}</p>
        <p className='second-txt'> {secondTxt}</p>
      </div>
    </div>
  );
};

export default Card;
